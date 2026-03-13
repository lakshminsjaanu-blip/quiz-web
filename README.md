# Quiz Registration System

A full-stack web application designed to host quizzes for 10 different subjects, featuring user registration, quiz taking, and an automatic scoring system. 

## Project Structure
- \`backend/\` - Node.js expressing APIs for user and quiz features. 
- \`frontend/\` - HTML/CSS/JS files for the User Interface. No framework used. 
- \`database/\` - SQL scripts and a MySQL dump with pre-generated 100 sample questions (10 subjects x 10 questions).

## Prerequisites
- Node.js installed
- MySQL Server installed and running 

## Setup Instructions

### 1. Database Setup
1. Open up your MySQL tool (e.g., MySQL Workbench or phpMyAdmin).
2. Create or import the database using the provided SQL file:
   \`\`\`bash
   mysql -u root -p < database/schema.sql
   \`\`\`
   *(This will create a \`quiz_system\` database and populate it with users, courses, and 100 questions).*
   
### 2. Backend Setup
1. Open terminal and navigate into the backend folder:
   \`\`\`bash
   cd backend
   \`\`\`
2. Install the necessary NPM dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Verify your database connection settings in \`backend/.env\` if your MySQL \`root\` user requires a password.
4. Start the Node.js server:
   \`\`\`bash
   node server.js
   \`\`\`
   *(The server runs on http://localhost:5000)*

### 3. Frontend Setup
1. In another terminal or file explorer, go to the \`frontend\` folder.
2. The frontend is built using standard HTML/CSS/JS. You can use an extension like **Live Server** in VSCode to serve it or simply drag and drop \`index.html\` into your browser to start the app.

## Features
- Complete user registration and login endpoints. 
- Real-time quiz fetch from Node.js APIs.
- Score tabulation and submission endpoints on Node.js backend to prevent user-tampering. 
- Colorful and intuitive UI without bulky frameworks.
