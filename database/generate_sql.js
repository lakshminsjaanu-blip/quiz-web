const fs = require('fs');

const quizzesData = [
    {
        subject: 'C Programming',
        questions: [
            { q: "Who is the father of C language?", options: ["Steve Jobs", "James Gosling", "Dennis Ritchie", "Rasmus Lerdorf"], ans: "Dennis Ritchie" },
            { q: "Which of the following is not a valid C variable name?", options: ["int number;", "float rate;", "int variable_count;", "int $main;"], ans: "int $main;" },
            { q: "All keywords in C are in ___", options: ["LowerCase letters", "UpperCase letters", "CamelCase letters", "None of the mentioned"], ans: "LowerCase letters" },
            { q: "Which is valid C expression?", options: ["int my_num = 100000;", "int my_num = 100,000;", "int my num = 1000;", "int $my_num = 10000;"], ans: "int my_num = 100000;" },
            { q: "What is an array in C language?", options: ["A collection of functions", "A collection of strings", "A collection of elements of same data type", "A collection of different data types"], ans: "A collection of elements of same data type" },
            { q: "What is the size of an int data type in C?", options: ["2 Bytes", "4 Bytes", "Depends on the system/compiler", "8 Bytes"], ans: "Depends on the system/compiler" },
            { q: "Which of the following cannot be a variable name in C?", options: ["volatile", "true", "friend", "export"], ans: "volatile" },
            { q: "What is the result of logical or relational expression in C?", options: ["True or False", "0 or 1", "0 if an expression is false and any positive number if an expression is true", "None of the mentioned"], ans: "0 or 1" },
            { q: "Which operator is used for bitwise XOR?", options: ["^", "&", "|", "~"], ans: "^" },
            { q: "Which of the following is true for variable names in C?", options: ["They can contain alphanumeric characters as well as special characters", "It is not an error to declare a variable to be one of the keywords", "Variable names cannot start with a digit", "Variable can be of any length"], ans: "Variable names cannot start with a digit" }
        ]
    },
    {
        subject: 'Data Structures',
        questions: [
            { q: "Which data structure follows LIFO?", options: ["Queue", "Tree", "Stack", "Graph"], ans: "Stack" },
            { q: "Which data structure is used for BFS?", options: ["Queue", "Stack", "Tree", "Array"], ans: "Queue" },
            { q: "What is the worst case time complexity of Quick Sort?", options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"], ans: "O(n^2)" },
            { q: "A tree node without any children is called ___", options: ["Root", "Leaf", "Branch", "Child"], ans: "Leaf" },
            { q: "Which of these is a linear data structure?", options: ["Tree", "Graph", "Array", "BST"], ans: "Array" },
            { q: "What is a Hash Table?", options: ["A structure that maps keys to values", "A sequence of elements", "A non-linear graph", "A tree with hash nodes"], ans: "A structure that maps keys to values" },
            { q: "In a min-heap, the root node is ___", options: ["The largest element", "The smallest element", "The median element", "None of the above"], ans: "The smallest element" },
            { q: "What is the time complexity to insert an element into an array at the end?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], ans: "O(1)" },
            { q: "Which of these allows deletion from both ends?", options: ["Stack", "Queue", "Deque", "Priority Queue"], ans: "Deque" },
            { q: "A graph with no cycles is called?", options: ["Complete Graph", "Acyclic Graph", "Cyclic Graph", "Bipartite Graph"], ans: "Acyclic Graph" }
        ]
    },
    {
        subject: 'DBMS',
        questions: [
            { q: "What does SQL stand for?", options: ["Structured Question Language", "Structured Query Language", "Strong Question Language", "Structured Query Library"], ans: "Structured Query Language" },
            { q: "Which of the following is a DDL command?", options: ["SELECT", "INSERT", "CREATE", "UPDATE"], ans: "CREATE" },
            { q: "RDBMS stands for?", options: ["Relational Database Management System", "Regional Data Management System", "Relative Database Management System", "Record Database Management System"], ans: "Relational Database Management System" },
            { q: "Which key uniquely identifies a row?", options: ["Foreign Key", "Primary Key", "Candidate Key", "Super Key"], ans: "Primary Key" },
            { q: "What does ACID stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Atomicity, Creation, Independence, Durability", "Atomicity, Consistency, Independence, Data", "Automated, Consistent, Isolated, Durable"], ans: "Atomicity, Consistency, Isolation, Durability" },
            { q: "Which normal form deals with partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], ans: "2NF" },
            { q: "A JOIN that returns all rows from both tables is called?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], ans: "FULL OUTER JOIN" },
            { q: "Which statement is used to remove a table?", options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "TRUNCATE TABLE"], ans: "DROP TABLE" },
            { q: "In ER modeling, an attribute is represented by?", options: ["Rectangle", "Diamond", "Ellipse", "Lines"], ans: "Ellipse" },
            { q: "What is a View?", options: ["A physical table", "A virtual table based on a query", "An index", "A trigger"], ans: "A virtual table based on a query" }
        ]
    },
    {
        subject: 'Operating Systems',
        questions: [
            { q: "Which of the following is NOT an OS?", options: ["Linux", "Windows", "Oracle", "macOS"], ans: "Oracle" },
            { q: "What is the core of an OS?", options: ["Shell", "Kernel", "Command Prompt", "GUI"], ans: "Kernel" },
            { q: "Multiprogramming systems ___", options: ["Are easier to develop", "Execute each job faster", "Execute more jobs in the same time period", "Use only one large memory"], ans: "Execute more jobs in the same time period" },
            { q: "What is a process context switch?", options: ["Saving the state of old process and loading state of new process", "Switching between CPU and memory", "Switching power state", "Closing an application"], ans: "Saving the state of old process and loading state of new process" },
            { q: "A deadlock happens when ___", options: ["Processes are running simultaneously", "A process is waiting for a resource held by another waiting process", "The CPU enters an infinite loop", "Memory is full"], ans: "A process is waiting for a resource held by another waiting process" },
            { q: "Virtual memory acts as an extension to ___", options: ["CPU", "Cache", "RAM", "Hard Disk"], ans: "RAM" },
            { q: "Round robin scheduling is primarily used for ___", options: ["Batch systems", "Interactive OS / Time-sharing", "Real-time systems", "None of the above"], ans: "Interactive OS / Time-sharing" },
            { q: "Which algorithm gives the optimal page replacement?", options: ["FIFO", "LRU", "Optimal Page Replacement", "MRU"], ans: "Optimal Page Replacement" },
            { q: "What is a thread?", options: ["A heavy weight process", "A subset of a program", "A lightweight process", "An application"], ans: "A lightweight process" },
            { q: "Thrashing occurs when ___", options: ["Too many pages are in memory", "CPU spends more time paging than executing", "The OS crashes", "A process is killed by the user"], ans: "CPU spends more time paging than executing" }
        ]
    },
    {
        subject: 'Computer Networks',
        questions: [
            { q: "How many layers are in the OSI model?", options: ["5", "6", "7", "8"], ans: "7" },
            { q: "Which protocol is essentially for the Web?", options: ["FTP", "HTTP", "SMTP", "SNMP"], ans: "HTTP" },
            { q: "IPv4 addresses are how many bits long?", options: ["16", "32", "64", "128"], ans: "32" },
            { q: "DNS translates ___ to ___", options: ["MAC to IP", "IP to Domain Name", "Domain Name to IP", "IP to MAC"], ans: "Domain Name to IP" },
            { q: "Which protocol provides reliable delivery?", options: ["UDP", "IP", "TCP", "ICMP"], ans: "TCP" },
            { q: "What port does HTTPS use?", options: ["80", "443", "21", "22"], ans: "443" },
            { q: "A router operates at which OSI layer?", options: ["Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)", "Layer 7 (Application)"], ans: "Layer 3 (Network)" },
            { q: "What does LAN stand for?", options: ["Local Area Network", "Large Area Network", "Link Area Network", "Logical Area Network"], ans: "Local Area Network" },
            { q: "MAC address is assigned by ___", options: ["The network administrator", "The ISP", "The manufacturer", "The OS"], ans: "The manufacturer" },
            { q: "Ping uses which protocol?", options: ["UDP", "TCP", "ICMP", "ARP"], ans: "ICMP" }
        ]
    },
    {
        subject: 'Software Engineering',
        questions: [
            { q: "Which SDLC model is sequential?", options: ["Agile", "Spiral", "Waterfall", "Iterative"], ans: "Waterfall" },
            { q: "What does SRS stand for?", options: ["Software Requirements Specification", "System Resource Specification", "System Requirements Source", "Software Rapid Solution"], ans: "Software Requirements Specification" },
            { q: "White box testing is also known as?", options: ["Glass box testing", "Behavioral testing", "Function testing", "Performance testing"], ans: "Glass box testing" },
            { q: "UML stands for?", options: ["User Modeling Language", "Unified Modeling Language", "Universal Modeling Language", "Unique Modeling Language"], ans: "Unified Modeling Language" },
            { q: "Which is not characteristic of Agile?", options: ["Iterative", "Heavy documentation", "Flexible", "Customer collaboration"], ans: "Heavy documentation" },
            { q: "Unit testing is typically performed by ___", options: ["QA", "End Users", "Developers", "Project Managers"], ans: "Developers" },
            { q: "What does cohesion measure?", options: ["How strongly elements of a module belong together", "Interdependence between modules", "Size of a module", "Execution time of a module"], ans: "How strongly elements of a module belong together" },
            { q: "Good software design implies?", options: ["High coupling, high cohesion", "Low coupling, low cohesion", "Low coupling, high cohesion", "High coupling, low cohesion"], ans: "Low coupling, high cohesion" },
            { q: "Alpha testing is done at?", options: ["Developer's site", "User's site", "Client's site", "None of the above"], ans: "Developer's site" },
            { q: "Maintenance phase accounts for about ___% of software cost.", options: ["20", "40", "60", "80"], ans: "60" }
        ]
    },
    {
        subject: 'Java',
        questions: [
            { q: "Java is compiled to ___", options: ["Machine Code", "Bytecode", "Assembly Code", "Source Code"], ans: "Bytecode" },
            { q: "Which keyword is used to inherit a class?", options: ["implements", "inherits", "extends", "overrides"], ans: "extends" },
            { q: "Which is the base class of all classes in Java?", options: ["String", "Object", "Class", "System"], ans: "Object" },
            { q: "JVM stands for?", options: ["Java Virtual Machine", "Java Variable Machine", "Java Verified Machine", "Java Visual Machine"], ans: "Java Virtual Machine" },
            { q: "What is string pooling in Java?", options: ["A memory where string objects are stored for reusability", "A way to delete strings", "A collection of characters", "A class"], ans: "A memory where string objects are stored for reusability" },
            { q: "Which collection allows null values and is synchronized?", options: ["HashMap", "Hashtable", "Not possible", "Vector"], ans: "Hashtable" }, // Wait, Hashtable DOES NOT allow null. Let's make it simpler.
            { q: "What are wrapper classes in Java?", options: ["Classes that wrap primitives into objects", "Classes that encrypt data", "UI components", "None of the above"], ans: "Classes that wrap primitives into objects" },
            { q: "Which access modifier makes members accessible only within the same package?", options: ["private", "public", "protected", "default (no modifier)"], ans: "default (no modifier)" },
            { q: "Abstract classes ___", options: ["Must contain all abstract methods", "Cannot be instantiated", "Cannot contain implemented methods", "Are final by default"], ans: "Cannot be instantiated" },
            { q: "Which exception is thrown when an array is accessed with an invalid index?", options: ["NullPointerException", "IndexOutOfBoundsException", "ArrayIndexOutOfBoundsException", "IllegalAccessError"], ans: "ArrayIndexOutOfBoundsException" }
        ]
    },
    {
        subject: 'Python',
        questions: [
            { q: "Which keyword defines a function in Python?", options: ["func", "def", "function", "lambda"], ans: "def" },
            { q: "Which symbol denotes a comment?", options: ["//", "/*", "#", "<!--"], ans: "#" },
            { q: "What data type is the result of 3 / 2 in Python 3?", options: ["int", "float", "string", "double"], ans: "float" },
            { q: "Python is ___ typed.", options: ["Statically", "Dynamically", "Strongly", "Not"], ans: "Dynamically" },
            { q: "Which structure represents a key-value store?", options: ["List", "Tuple", "Dictionary", "Set"], ans: "Dictionary" },
            { q: "Lists in Python are ___", options: ["Immutable", "Mutable", "Fixed-size", "Only for integers"], ans: "Mutable" },
            { q: "What does __init__ do?", options: ["Initializes a class", "Initializes a database", "Imports a module", "None of the above"], ans: "Initializes a class" },
            { q: "Which statement is used to catch exceptions?", options: ["try...catch", "try...except", "do...catch", "catch"], ans: "try...except" },
            { q: "What does len() do?", options: ["Returns the length of an object", "Converts object to integer", "Parses JSON", "Loops over an object"], ans: "Returns the length of an object" },
            { q: "The 'self' keyword in Python refers to?", options: ["The class itself", "The parent class", "The current instance of the class", "A static variable"], ans: "The current instance of the class" }
        ]
    },
    {
        subject: 'Web Development',
        questions: [
            { q: "HTML stands for?", options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"], ans: "Hyper Text Markup Language" },
            { q: "Which CSS property changes text color?", options: ["text-style", "font-color", "color", "text-color"], ans: "color" },
            { q: "Which HTML tag is used for the largest heading?", options: ["<h1>", "<heading>", "<h6>", "<head>"], ans: "<h1>" },
            { q: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], ans: "Cascading Style Sheets" },
            { q: "In JavaScript, '===' means?", options: ["Assignment", "Equality with type coercion", "Strict equality (type and value)", "Not equal"], ans: "Strict equality (type and value)" },
            { q: "Which keyword declares a variable in ES6?", options: ["var", "let", "declare", "int"], ans: "let" },
            { q: "What does an API do?", options: ["Styles the page", "Provides a way for applications to communicate", "Manages the database", "Compiles code"], ans: "Provides a way for applications to communicate" },
            { q: "Which HTTP method is typically used to create a new resource?", options: ["GET", "PUT", "POST", "DELETE"], ans: "POST" },
            { q: "React is a ___", options: ["Database", "CSS framework", "JavaScript library", "Python library"], ans: "JavaScript library" },
            { q: "Which of these is a backend runtime context?", options: ["Chrome", "Node.js", "V8", "Babel"], ans: "Node.js" }
        ]
    },
    {
        subject: 'Embedded Systems',
        questions: [
            { q: "What is an embedded system?", options: ["A PC", "A system dedicated to a specific task", "A database server", "A cloud virtual machine"], ans: "A system dedicated to a specific task" },
            { q: "Which of the following is commonly used in embedded systems?", options: ["Microcontroller", "Mainframe", "Supercomputer", "Quantum Computer"], ans: "Microcontroller" },
            { q: "What is an RTOS?", options: ["Real-Time Operating System", "Reliable Transfer OS", "Regional Time OS", "Runtime OS"], ans: "Real-Time Operating System" },
            { q: "Which communication protocol is a synchronous serial protocol?", options: ["UART", "I2C", "SPI", "RS-232"], ans: "SPI" },
            { q: "What does ADC stand for?", options: ["Analog to Digital Converter", "Advanced Data Controller", "Analog Display Controller", "Automatic Data Control"], ans: "Analog to Digital Converter" },
            { q: "A Watchdog Timer is used to ___", options: ["Keep the current time", "Reset the system if it hangs", "Trigger interrupts at intervals", "Save power"], ans: "Reset the system if it hangs" },
            { q: "Which memory is non-volatile?", options: ["SRAM", "DRAM", "Cache", "EEPROM"], ans: "EEPROM" },
            { q: "I2C uses how many lines?", options: ["1", "2", "3", "4"], ans: "2" },
            { q: "Which language is heavily used for embedded programming?", options: ["Python", "Java", "C", "Ruby"], ans: "C" },
            { q: "Interrupts are used to ___", options: ["Slow down the processor", "Handle asynchronous events immediately", "Manage memory", "Execute infinite loops"], ans: "Handle asynchronous events immediately" }
        ]
    }
];

let sql = `
DROP DATABASE IF EXISTS quiz_system;
CREATE DATABASE quiz_system;
USE quiz_system;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE quizzes (
    quiz_id INT AUTO_INCREMENT PRIMARY KEY,
    subject_name VARCHAR(255) NOT NULL
);

CREATE TABLE questions (
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_id INT,
    question TEXT NOT NULL,
    option1 VARCHAR(255) NOT NULL,
    option2 VARCHAR(255) NOT NULL,
    option3 VARCHAR(255) NOT NULL,
    option4 VARCHAR(255) NOT NULL,
    correct_option VARCHAR(255) NOT NULL,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id) ON DELETE CASCADE
);

CREATE TABLE results (
    result_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    quiz_id INT,
    score INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id) ON DELETE CASCADE
);

-- Insert Subjects
INSERT INTO quizzes (subject_name) VALUES
${quizzesData.map(q => `('${q.subject}')`).join(',\n')};

-- Insert default users to keep local storage sessions valid
INSERT INTO users (id, name, email, password) VALUES 
(1, 'Test User 1', 'test1@test.com', 'password123'),
(2, 'Test User 2', 'test2@test.com', 'password123'),
(3, 'Test User 3', 'test3@test.com', 'password123'),
(4, 'Test User 4', 'test4@test.com', 'password123'),
(5, 'Test User 5', 'test5@test.com', 'password123');

-- Insert Questions
INSERT INTO questions (quiz_id, question, option1, option2, option3, option4, correct_option) VALUES
`;

const questionsValues = [];

quizzesData.forEach((quiz, i) => {
    const quizId = i + 1;
    quiz.questions.forEach(q => {
        // Escape quotes
        const qText = q.q.replace(/'/g, "\\'");
        const o1 = q.options[0].replace(/'/g, "\\'");
        const o2 = q.options[1].replace(/'/g, "\\'");
        const o3 = q.options[2].replace(/'/g, "\\'");
        const o4 = q.options[3].replace(/'/g, "\\'");
        const ans = q.ans.replace(/'/g, "\\'");
        questionsValues.push(`(${quizId}, '${qText}', '${o1}', '${o2}', '${o3}', '${o4}', '${ans}')`);
    });
});

sql += questionsValues.join(',\n') + ';\n';

fs.writeFileSync('d:/quiz-registration-system/database/schema.sql', sql);
console.log('SQL generated successfully with real questions and dummy user.');
