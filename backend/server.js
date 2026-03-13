const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'quiz_system'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL Database');
    }
});

// User Module

// POST /register
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') return res.status(400).json({ error: 'Email already exists' });
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
});

// POST /login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

        res.json({ message: 'Login successful', user: { id: results[0].id, name: results[0].name, email: results[0].email } });
    });
});

// Quiz Module

// GET /quizzes
app.get('/quizzes', (req, res) => {
    db.query('SELECT * FROM quizzes', (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    });
});

// GET /quiz/:id (Get questions for a subject)
app.get('/quiz/:id', (req, res) => {
    const quizId = req.params.id;
    // Don't send the correct_option to the frontend so they can't cheat
    const sql = 'SELECT question_id, quiz_id, question, option1, option2, option3, option4 FROM questions WHERE quiz_id = ?';
    db.query(sql, [quizId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    });
});

// POST /submit
app.post('/submit', (req, res) => {
    const { userId, quizId, answers } = req.body;
    // answers is expected to be an object: { question_id: 'SelectedOption', ... }

    if (!userId || !quizId || !answers) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const questionIds = Object.keys(answers).map(Number);
    if (questionIds.length === 0) {
        return res.status(400).json({ error: 'No answers submitted' });
    }

    // Fetch the correct answers from DB
    const sql = 'SELECT question_id, correct_option FROM questions WHERE question_id IN (?)';
    db.query(sql, [questionIds], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });

        let score = 0;
        const correctAnswersDict = {};

        results.forEach(row => {
            correctAnswersDict[row.question_id] = row.correct_option;
        });

        questionIds.forEach(qId => {
            if (answers[qId] === correctAnswersDict[qId]) {
                score += 1;
            }
        });

        // Save result
        const resultSql = 'INSERT INTO results (user_id, quiz_id, score) VALUES (?, ?, ?)';
        db.query(resultSql, [userId, quizId, score], (err, result) => {
            if (err) return res.status(500).json({ error: 'Failed to save result' });
            res.json({ message: 'Quiz submitted successfully', score: score, total: questionIds.length });
        });
    });
});

// GET /results/:userId
app.get('/results/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = `
        SELECT r.result_id, q.subject_name, r.score 
        FROM results r 
        JOIN quizzes q ON r.quiz_id = q.quiz_id 
        WHERE r.user_id = ?
        ORDER BY r.result_id DESC
    `;
    db.query(sql, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    });
});

// Admin Module

// POST /admin/subject
app.post('/admin/subject', (req, res) => {
    const { subject_name } = req.body;
    db.query('INSERT INTO quizzes (subject_name) VALUES (?)', [subject_name], (err, result) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json({ message: 'Subject added successfully', quiz_id: result.insertId });
    });
});

// POST /admin/question
app.post('/admin/question', (req, res) => {
    const { quiz_id, question, option1, option2, option3, option4, correct_option } = req.body;
    const sql = 'INSERT INTO questions (quiz_id, question, option1, option2, option3, option4, correct_option) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [quiz_id, question, option1, option2, option3, option4, correct_option], (err, result) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json({ message: 'Question added successfully' });
    });
});

// GET /admin/results
app.get('/admin/results', (req, res) => {
    const sql = `
        SELECT u.name, u.email, q.subject_name, r.score
        FROM results r
        JOIN users u ON r.user_id = u.id
        JOIN quizzes q ON r.quiz_id = q.quiz_id
        ORDER BY r.result_id DESC
    `;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
