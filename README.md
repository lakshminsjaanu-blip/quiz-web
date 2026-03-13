# 🎯 Quiz Registration System

![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Frontend](https://img.shields.io/badge/Frontend-HTML%20CSS%20JavaScript-blue)
![Database](https://img.shields.io/badge/Database-MySQL-orange)
![Status](https://img.shields.io/badge/Project-Active-success)

A **full-stack web application** that allows users to **register, login, and take quizzes** across multiple subjects.  
The system automatically **evaluates answers and calculates scores**, providing a simple and interactive learning platform.

---

# 📌 Project Overview

The **Quiz Registration System** is designed to help students test their knowledge across **10 different subjects**.  
The application includes **user authentication, quiz management, and automatic scoring**.

This project demonstrates the integration of:

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js with Express.js  
- **Database:** MySQL  

---

# 🗂 Project Structure

```
quiz-registration-system
│
├── backend/        # Node.js API for user authentication and quiz handling
│
├── frontend/       # HTML, CSS, JavaScript files for the UI
│
├── database/       # SQL scripts and MySQL dump
│
└── README.md       # Project documentation
```

---

# ✨ Features

✔ User Registration & Login  
✔ 10 Different Quiz Subjects  
✔ 100 Pre-Generated Questions  
✔ Real-Time Quiz Fetch from Backend  
✔ Automatic Score Calculation  
✔ Secure Backend Evaluation  
✔ Simple & Interactive UI  

---

# 🛠 Technologies Used

| Technology | Purpose |
|------------|--------|
| **HTML** | Structure of web pages |
| **CSS** | Styling and layout |
| **JavaScript** | Frontend logic |
| **Node.js** | Backend runtime |
| **Express.js** | API development |
| **MySQL** | Database management |

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/quiz-registration-system.git
cd quiz-registration-system
```

---

# 🗄 Database Setup

1. Open **MySQL Workbench** or **phpMyAdmin**.
2. Import the database using the SQL file:

```bash
mysql -u root -p < database/schema.sql
```

This will create the database:

```
quiz_system
```

It also automatically inserts:

- Users table
- Courses table
- **100 quiz questions**

---

# 🚀 Backend Setup

1. Navigate to the backend folder

```bash
cd backend
```

2. Install required dependencies

```bash
npm install
```

3. Check database credentials inside:

```
backend/.env
```

Example:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=quiz_system
```

4. Start the backend server

```bash
node server.js
```

Server will start at:

```
http://localhost:5000
```

---

# 💻 Frontend Setup

1. Open the **frontend** folder.

2. Run the application using **Live Server** in VS Code  
   OR simply open:

```
index.html
```

in your browser.

---

# 📊 How the System Works

1️⃣ User registers or logs in  
2️⃣ User selects a quiz subject  
3️⃣ Quiz questions are fetched from backend API  
4️⃣ User answers questions  
5️⃣ Backend evaluates answers  
6️⃣ Score is calculated and displayed  

---

# 📷 Screenshots (Optional)

You can add screenshots here for better presentation.

Example:

```
/screenshots/homepage.png
/screenshots/quizpage.png
/screenshots/result.png
```

---

# 🔐 Security Features

- Quiz answers evaluated on **backend**
- Prevents **client-side tampering**
- Secure API communication between frontend and backend

---

# 📚 Future Improvements

- Leaderboard system 🏆  
- Timer for quizzes ⏳  
- Admin dashboard for question management  
- Result history for users  
- Responsive mobile UI  

---

# 👩‍💻 Author

**Janushree**

📧 Student Developer  
💻 Passionate about Web Development & Software Engineering

---

# ⭐ Support

If you like this project, please **give it a star ⭐ on GitHub**!
