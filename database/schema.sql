
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
('C Programming'),
('Data Structures'),
('DBMS'),
('Operating Systems'),
('Computer Networks'),
('Software Engineering'),
('Java'),
('Python'),
('Web Development'),
('Embedded Systems');

-- Insert default users to keep local storage sessions valid
INSERT INTO users (id, name, email, password) VALUES 
(1, 'Test User 1', 'test1@test.com', 'password123'),
(2, 'Test User 2', 'test2@test.com', 'password123'),
(3, 'Test User 3', 'test3@test.com', 'password123'),
(4, 'Test User 4', 'test4@test.com', 'password123'),
(5, 'Test User 5', 'test5@test.com', 'password123');

-- Insert Questions
INSERT INTO questions (quiz_id, question, option1, option2, option3, option4, correct_option) VALUES
(1, 'Who is the father of C language?', 'Steve Jobs', 'James Gosling', 'Dennis Ritchie', 'Rasmus Lerdorf', 'Dennis Ritchie'),
(1, 'Which of the following is not a valid C variable name?', 'int number;', 'float rate;', 'int variable_count;', 'int $main;', 'int $main;'),
(1, 'All keywords in C are in ___', 'LowerCase letters', 'UpperCase letters', 'CamelCase letters', 'None of the mentioned', 'LowerCase letters'),
(1, 'Which is valid C expression?', 'int my_num = 100000;', 'int my_num = 100,000;', 'int my num = 1000;', 'int $my_num = 10000;', 'int my_num = 100000;'),
(1, 'What is an array in C language?', 'A collection of functions', 'A collection of strings', 'A collection of elements of same data type', 'A collection of different data types', 'A collection of elements of same data type'),
(1, 'What is the size of an int data type in C?', '2 Bytes', '4 Bytes', 'Depends on the system/compiler', '8 Bytes', 'Depends on the system/compiler'),
(1, 'Which of the following cannot be a variable name in C?', 'volatile', 'true', 'friend', 'export', 'volatile'),
(1, 'What is the result of logical or relational expression in C?', 'True or False', '0 or 1', '0 if an expression is false and any positive number if an expression is true', 'None of the mentioned', '0 or 1'),
(1, 'Which operator is used for bitwise XOR?', '^', '&', '|', '~', '^'),
(1, 'Which of the following is true for variable names in C?', 'They can contain alphanumeric characters as well as special characters', 'It is not an error to declare a variable to be one of the keywords', 'Variable names cannot start with a digit', 'Variable can be of any length', 'Variable names cannot start with a digit'),
(2, 'Which data structure follows LIFO?', 'Queue', 'Tree', 'Stack', 'Graph', 'Stack'),
(2, 'Which data structure is used for BFS?', 'Queue', 'Stack', 'Tree', 'Array', 'Queue'),
(2, 'What is the worst case time complexity of Quick Sort?', 'O(n log n)', 'O(n)', 'O(n^2)', 'O(log n)', 'O(n^2)'),
(2, 'A tree node without any children is called ___', 'Root', 'Leaf', 'Branch', 'Child', 'Leaf'),
(2, 'Which of these is a linear data structure?', 'Tree', 'Graph', 'Array', 'BST', 'Array'),
(2, 'What is a Hash Table?', 'A structure that maps keys to values', 'A sequence of elements', 'A non-linear graph', 'A tree with hash nodes', 'A structure that maps keys to values'),
(2, 'In a min-heap, the root node is ___', 'The largest element', 'The smallest element', 'The median element', 'None of the above', 'The smallest element'),
(2, 'What is the time complexity to insert an element into an array at the end?', 'O(1)', 'O(n)', 'O(log n)', 'O(n^2)', 'O(1)'),
(2, 'Which of these allows deletion from both ends?', 'Stack', 'Queue', 'Deque', 'Priority Queue', 'Deque'),
(2, 'A graph with no cycles is called?', 'Complete Graph', 'Acyclic Graph', 'Cyclic Graph', 'Bipartite Graph', 'Acyclic Graph'),
(3, 'What does SQL stand for?', 'Structured Question Language', 'Structured Query Language', 'Strong Question Language', 'Structured Query Library', 'Structured Query Language'),
(3, 'Which of the following is a DDL command?', 'SELECT', 'INSERT', 'CREATE', 'UPDATE', 'CREATE'),
(3, 'RDBMS stands for?', 'Relational Database Management System', 'Regional Data Management System', 'Relative Database Management System', 'Record Database Management System', 'Relational Database Management System'),
(3, 'Which key uniquely identifies a row?', 'Foreign Key', 'Primary Key', 'Candidate Key', 'Super Key', 'Primary Key'),
(3, 'What does ACID stand for?', 'Atomicity, Consistency, Isolation, Durability', 'Atomicity, Creation, Independence, Durability', 'Atomicity, Consistency, Independence, Data', 'Automated, Consistent, Isolated, Durable', 'Atomicity, Consistency, Isolation, Durability'),
(3, 'Which normal form deals with partial dependency?', '1NF', '2NF', '3NF', 'BCNF', '2NF'),
(3, 'A JOIN that returns all rows from both tables is called?', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN', 'FULL OUTER JOIN'),
(3, 'Which statement is used to remove a table?', 'DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'TRUNCATE TABLE', 'DROP TABLE'),
(3, 'In ER modeling, an attribute is represented by?', 'Rectangle', 'Diamond', 'Ellipse', 'Lines', 'Ellipse'),
(3, 'What is a View?', 'A physical table', 'A virtual table based on a query', 'An index', 'A trigger', 'A virtual table based on a query'),
(4, 'Which of the following is NOT an OS?', 'Linux', 'Windows', 'Oracle', 'macOS', 'Oracle'),
(4, 'What is the core of an OS?', 'Shell', 'Kernel', 'Command Prompt', 'GUI', 'Kernel'),
(4, 'Multiprogramming systems ___', 'Are easier to develop', 'Execute each job faster', 'Execute more jobs in the same time period', 'Use only one large memory', 'Execute more jobs in the same time period'),
(4, 'What is a process context switch?', 'Saving the state of old process and loading state of new process', 'Switching between CPU and memory', 'Switching power state', 'Closing an application', 'Saving the state of old process and loading state of new process'),
(4, 'A deadlock happens when ___', 'Processes are running simultaneously', 'A process is waiting for a resource held by another waiting process', 'The CPU enters an infinite loop', 'Memory is full', 'A process is waiting for a resource held by another waiting process'),
(4, 'Virtual memory acts as an extension to ___', 'CPU', 'Cache', 'RAM', 'Hard Disk', 'RAM'),
(4, 'Round robin scheduling is primarily used for ___', 'Batch systems', 'Interactive OS / Time-sharing', 'Real-time systems', 'None of the above', 'Interactive OS / Time-sharing'),
(4, 'Which algorithm gives the optimal page replacement?', 'FIFO', 'LRU', 'Optimal Page Replacement', 'MRU', 'Optimal Page Replacement'),
(4, 'What is a thread?', 'A heavy weight process', 'A subset of a program', 'A lightweight process', 'An application', 'A lightweight process'),
(4, 'Thrashing occurs when ___', 'Too many pages are in memory', 'CPU spends more time paging than executing', 'The OS crashes', 'A process is killed by the user', 'CPU spends more time paging than executing'),
(5, 'How many layers are in the OSI model?', '5', '6', '7', '8', '7'),
(5, 'Which protocol is essentially for the Web?', 'FTP', 'HTTP', 'SMTP', 'SNMP', 'HTTP'),
(5, 'IPv4 addresses are how many bits long?', '16', '32', '64', '128', '32'),
(5, 'DNS translates ___ to ___', 'MAC to IP', 'IP to Domain Name', 'Domain Name to IP', 'IP to MAC', 'Domain Name to IP'),
(5, 'Which protocol provides reliable delivery?', 'UDP', 'IP', 'TCP', 'ICMP', 'TCP'),
(5, 'What port does HTTPS use?', '80', '443', '21', '22', '443'),
(5, 'A router operates at which OSI layer?', 'Layer 2 (Data Link)', 'Layer 3 (Network)', 'Layer 4 (Transport)', 'Layer 7 (Application)', 'Layer 3 (Network)'),
(5, 'What does LAN stand for?', 'Local Area Network', 'Large Area Network', 'Link Area Network', 'Logical Area Network', 'Local Area Network'),
(5, 'MAC address is assigned by ___', 'The network administrator', 'The ISP', 'The manufacturer', 'The OS', 'The manufacturer'),
(5, 'Ping uses which protocol?', 'UDP', 'TCP', 'ICMP', 'ARP', 'ICMP'),
(6, 'Which SDLC model is sequential?', 'Agile', 'Spiral', 'Waterfall', 'Iterative', 'Waterfall'),
(6, 'What does SRS stand for?', 'Software Requirements Specification', 'System Resource Specification', 'System Requirements Source', 'Software Rapid Solution', 'Software Requirements Specification'),
(6, 'White box testing is also known as?', 'Glass box testing', 'Behavioral testing', 'Function testing', 'Performance testing', 'Glass box testing'),
(6, 'UML stands for?', 'User Modeling Language', 'Unified Modeling Language', 'Universal Modeling Language', 'Unique Modeling Language', 'Unified Modeling Language'),
(6, 'Which is not characteristic of Agile?', 'Iterative', 'Heavy documentation', 'Flexible', 'Customer collaboration', 'Heavy documentation'),
(6, 'Unit testing is typically performed by ___', 'QA', 'End Users', 'Developers', 'Project Managers', 'Developers'),
(6, 'What does cohesion measure?', 'How strongly elements of a module belong together', 'Interdependence between modules', 'Size of a module', 'Execution time of a module', 'How strongly elements of a module belong together'),
(6, 'Good software design implies?', 'High coupling, high cohesion', 'Low coupling, low cohesion', 'Low coupling, high cohesion', 'High coupling, low cohesion', 'Low coupling, high cohesion'),
(6, 'Alpha testing is done at?', 'Developer\'s site', 'User\'s site', 'Client\'s site', 'None of the above', 'Developer\'s site'),
(6, 'Maintenance phase accounts for about ___% of software cost.', '20', '40', '60', '80', '60'),
(7, 'Java is compiled to ___', 'Machine Code', 'Bytecode', 'Assembly Code', 'Source Code', 'Bytecode'),
(7, 'Which keyword is used to inherit a class?', 'implements', 'inherits', 'extends', 'overrides', 'extends'),
(7, 'Which is the base class of all classes in Java?', 'String', 'Object', 'Class', 'System', 'Object'),
(7, 'JVM stands for?', 'Java Virtual Machine', 'Java Variable Machine', 'Java Verified Machine', 'Java Visual Machine', 'Java Virtual Machine'),
(7, 'What is string pooling in Java?', 'A memory where string objects are stored for reusability', 'A way to delete strings', 'A collection of characters', 'A class', 'A memory where string objects are stored for reusability'),
(7, 'Which collection allows null values and is synchronized?', 'HashMap', 'Hashtable', 'Not possible', 'Vector', 'Hashtable'),
(7, 'What are wrapper classes in Java?', 'Classes that wrap primitives into objects', 'Classes that encrypt data', 'UI components', 'None of the above', 'Classes that wrap primitives into objects'),
(7, 'Which access modifier makes members accessible only within the same package?', 'private', 'public', 'protected', 'default (no modifier)', 'default (no modifier)'),
(7, 'Abstract classes ___', 'Must contain all abstract methods', 'Cannot be instantiated', 'Cannot contain implemented methods', 'Are final by default', 'Cannot be instantiated'),
(7, 'Which exception is thrown when an array is accessed with an invalid index?', 'NullPointerException', 'IndexOutOfBoundsException', 'ArrayIndexOutOfBoundsException', 'IllegalAccessError', 'ArrayIndexOutOfBoundsException'),
(8, 'Which keyword defines a function in Python?', 'func', 'def', 'function', 'lambda', 'def'),
(8, 'Which symbol denotes a comment?', '//', '/*', '#', '<!--', '#'),
(8, 'What data type is the result of 3 / 2 in Python 3?', 'int', 'float', 'string', 'double', 'float'),
(8, 'Python is ___ typed.', 'Statically', 'Dynamically', 'Strongly', 'Not', 'Dynamically'),
(8, 'Which structure represents a key-value store?', 'List', 'Tuple', 'Dictionary', 'Set', 'Dictionary'),
(8, 'Lists in Python are ___', 'Immutable', 'Mutable', 'Fixed-size', 'Only for integers', 'Mutable'),
(8, 'What does __init__ do?', 'Initializes a class', 'Initializes a database', 'Imports a module', 'None of the above', 'Initializes a class'),
(8, 'Which statement is used to catch exceptions?', 'try...catch', 'try...except', 'do...catch', 'catch', 'try...except'),
(8, 'What does len() do?', 'Returns the length of an object', 'Converts object to integer', 'Parses JSON', 'Loops over an object', 'Returns the length of an object'),
(8, 'The \'self\' keyword in Python refers to?', 'The class itself', 'The parent class', 'The current instance of the class', 'A static variable', 'The current instance of the class'),
(9, 'HTML stands for?', 'Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Tool Markup Language', 'Hyper Text Markup Language'),
(9, 'Which CSS property changes text color?', 'text-style', 'font-color', 'color', 'text-color', 'color'),
(9, 'Which HTML tag is used for the largest heading?', '<h1>', '<heading>', '<h6>', '<head>', '<h1>'),
(9, 'What does CSS stand for?', 'Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets', 'Cascading Style Sheets'),
(9, 'In JavaScript, \'===\' means?', 'Assignment', 'Equality with type coercion', 'Strict equality (type and value)', 'Not equal', 'Strict equality (type and value)'),
(9, 'Which keyword declares a variable in ES6?', 'var', 'let', 'declare', 'int', 'let'),
(9, 'What does an API do?', 'Styles the page', 'Provides a way for applications to communicate', 'Manages the database', 'Compiles code', 'Provides a way for applications to communicate'),
(9, 'Which HTTP method is typically used to create a new resource?', 'GET', 'PUT', 'POST', 'DELETE', 'POST'),
(9, 'React is a ___', 'Database', 'CSS framework', 'JavaScript library', 'Python library', 'JavaScript library'),
(9, 'Which of these is a backend runtime context?', 'Chrome', 'Node.js', 'V8', 'Babel', 'Node.js'),
(10, 'What is an embedded system?', 'A PC', 'A system dedicated to a specific task', 'A database server', 'A cloud virtual machine', 'A system dedicated to a specific task'),
(10, 'Which of the following is commonly used in embedded systems?', 'Microcontroller', 'Mainframe', 'Supercomputer', 'Quantum Computer', 'Microcontroller'),
(10, 'What is an RTOS?', 'Real-Time Operating System', 'Reliable Transfer OS', 'Regional Time OS', 'Runtime OS', 'Real-Time Operating System'),
(10, 'Which communication protocol is a synchronous serial protocol?', 'UART', 'I2C', 'SPI', 'RS-232', 'SPI'),
(10, 'What does ADC stand for?', 'Analog to Digital Converter', 'Advanced Data Controller', 'Analog Display Controller', 'Automatic Data Control', 'Analog to Digital Converter'),
(10, 'A Watchdog Timer is used to ___', 'Keep the current time', 'Reset the system if it hangs', 'Trigger interrupts at intervals', 'Save power', 'Reset the system if it hangs'),
(10, 'Which memory is non-volatile?', 'SRAM', 'DRAM', 'Cache', 'EEPROM', 'EEPROM'),
(10, 'I2C uses how many lines?', '1', '2', '3', '4', '2'),
(10, 'Which language is heavily used for embedded programming?', 'Python', 'Java', 'C', 'Ruby', 'C'),
(10, 'Interrupts are used to ___', 'Slow down the processor', 'Handle asynchronous events immediately', 'Manage memory', 'Execute infinite loops', 'Handle asynchronous events immediately');
