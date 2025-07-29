// questions.js
const questions = [
  {
    section: "Java",
    question: "What is the size of int in Java?",
    options: ["8 bytes", "2 bytes", "4 bytes", "Depends on system"],
    answer: "4 bytes"
  },
  {
    section: "UI",
    question: "Which UI statement is used to extract data from a database?",
    options: ["GET", "SELECT", "OPEN", "EXTRACT"],
    answer: "SELECT"
  },
  {
    section: "Unix",
    question: "Which command is used to list all files, including hidden ones, in Unix?",
    options: ["ls", "ls -a", "ls -l", "list"],
    answer: "ls -a"
  },
  {
    section: "UI",
    question: "",
    options: [],
    answer: ""
  }, {
    section: "Java",
    question: "Which of the following is the full-featured software developer kit for Java?",
    options: ["JRE", "IDE", "JDK"],
    answer: "JDK"
  },
  {
    section: "Java",
    question: "You must use an IDE to write Java programs.",
    options: ["FALSE", "TRUE"],
    answer: "FALSE"
  },
  {
    section: "Java",
    question: "To check which version of Java your terminal is using, what do you type in the command line?",
    options: [
      "/Library/Java/JavaVirtualMachines/jdk-11.0.1.jdk",
      "/usr/libexec/java_home -V",
      "java -version/jdk_home -V",
      "Java_HOME=`/usr/libexec/java-home -v 11.0`"
    ],
    answer: "/usr/libexec/java_home -V"
  },
  {
    section: "Java",
    question: "What command do you type in the terminal to get a quick introduction of the JShell?",
    options: [
      "/intro int x = 8",
      "/help JShell tool intro",
      "jshell> /help intro",
      "/intro JShell"
    ],
    answer: "jshell> /help intro"
  },
  {
    section: "Java",
    question: "Which runtime system starts your program by calling its _____ function first?",
    options: ["main", "hello", "print", "iterative"],
    answer: "main"
  },
  {
    section: "Java",
    question: "Which of the following is true about the JShell?",
    options: [
      "JShell lives in the terminal",
      "all of these choices",
      "JShell allows you to see the results of the your code quickly without a bunch of overhead",
      "The /help command lets you learn more about how to interact with Jshell"
    ],
    answer: "all of these choices"
  },
  {
    section: "Java",
    question: "How do you get access to the code you're developing in IDE?",
    options: [
      "Click into .idea under the navigation pane in the top left corner of the screen.",
      "Click into source (src) under the navigation pane in the top left corner of the screen.",
      "Click into .localized under the navigation pane in the top left corner of the screen.",
      "Click into Desktop.iml under the navigation pane in the top left corner of the screen."
    ],
    answer: "Click into source (src) under the navigation pane in the top left corner of the screen."
  },
  
  {
    section: "Java",
    question: "What does IDE stand for?",
    options: [
      "Interactive Developer Ecosystem",
      "Integrated Developer Ecosystem",
      "Interactive Development Environment",
      "Integrated Development Environment"
    ],
    answer: "Integrated Development Environment"
  },
  {
    section: "Java",
    question: "What Java class allows us to get input from the user?",
    options: ["System.in", "The Scanner class", "sc"],
    answer: "The Scanner class"
  },
  {
    section: "Java",
    question: "We describe the types of data an object has in a Class with _____?",
    options: ["functions", "properties or attributes", "instances"],
    answer: "properties or attributes"
  },
  {
    section: "Java",
    question: "What is the syntactically correct way to declare a variable in Java?",
    options: ["numberOfPeople;", "int numberOfPeople;", "var numberOfPeople;"],
    answer: "int numberOfPeople;"
  },
  {
    section: "Java",
    question: "_____ in real life can be represented in code.",
    options: ["Sequences", "Attributes", "Instances", "Anything"],
    answer: "Anything"
  },{
    section: "UI",
    question: "What is the smallest header in HTML by default?",
    options: ["H1", "H2", "H6", "H4"],
    answer: "H6"
  },
  {
    section: "UI",
    question: "Which of the following colors contain equal amounts of RGB?",
    options: ["White", "Gray", "Black", "All of the above"],
    answer: "All of the above"
  },
  
  
  {
    section: "UI",
    question: "Which attribute is used to provide a unique name to an HTML element?",
    options: ["id", "class", "type", "None of the above"],
    answer: "id"
  },
  {
    section: "UI",
    question: "What is the specialty about the <small> and <big> tags in HTML?",
    options: [
      "They work on anything.",
      "They can be used for text only.",
      "They can be repeated.",
      "None of the above."
    ],
    answer: "They can be repeated."
  },
  {
    section: "UI",
    question: "Which is not a CSS unit?",
    options: ["em", "ut", "%", "px"],
    answer: "ut"
  },
  {
    section: "UI",
    question: "What is the syntax of background image in CSS?",
    options: [
      "background-image",
      "set-background",
      "css-background",
      "backgroundUrl"
    ],
    answer: "background-image"
  },
  {
    section: "UI",
    question: "Do all HTML tags have closing tags?",
    options: ["True", "False"],
    answer: "False"
  },
  
  {
    section: "UI",
    question: "Which is an invalid escape sequence in JavaScript?",
    options: ["/e", "/r", "/f", "/b"],
    answer: "/e"
  },
  {
    section: "UI",
    question: "What does text-align: justify do?",
    options: ["Left", "Right", "Center", "None of the above"],
    answer: "None of the above"
  },
 
  
  
  
  
  {
    section: "UI",
    question: "What are some valid character sets available?",
    options: ["UTF-8", "ANSI", "ASCII", "All of the above"],
    answer: "All of the above"
  },
  {
    section: "UI",
    question: "What are the types of unordered lists in HTML?",
    options: [
      "Circle, square, disc",
      "Triangle, square, disc",
      "Triangle, circle, disc",
      "All of the above"
    ],
    answer: "Circle, square, disc"
  },
  {
    section: "UI",
    question: "How can we select an element with a specific class in CSS?",
    options: ["#", ".", "<", "None of them"],
    answer: "."
  },
  {
    section: "UI",
    question: "How can we write comments in CSS?",
    options: ["/* */", "//", "#", "All of them"],
    answer: "/* */"
  },
  
  {
    section: "UI",
    question: "How can we write comments in CSS?",
    options: ["/* */", "//", "#", "All of them"],
    answer: "/* */"
  },
  {
    section: "UI",
    question: "You have created a shell script and want to run the script. What should you do before trying to run the script?",
    options: ["No action required", "Compile the script", "Update the execute permission of the script", "Add shebang line"],
    answer: "Update the execute permission of the script"
  },
  
  {
    section: "UI",
    question: "What will the result of var x = 100 + 5 ** 3 be in JS?",
    options: ["125", "225", "NaN", "Error"],
    answer: "225"
  },
  {
    section: "UI",
    question: "How are arrays defined in JavaScript?",
    options: ["List form []", "Tuple form ()", "Dictionary form {}", "None of these"],
    answer: "List form []"
  },
  
  {
    section: "UI",
    question: "Which is not a valid color in HTML?",
    options: ["Color: darkblue", "Color: #o0ooff", "Color: rgb(0,0,255)", "Color: blue"],
    answer: "Color: #o0ooff"
  },
  

  
  {
    section: "UI",
    question: "A link can be an image or any other HTML element?",
    options: ["True", "False"],
    answer: "True"
  },
  {
    section: "UI",
    question: "Which property is not applicable for a paragraph?",
    options: ["Float", "Border", "Margin", "font-family"],
    answer: "Float"
  },
  {
    section: "UI",
    question: "What is SVG used for?",
    options: [
      "Drawing lines, graphics, etc.",
      "For sound to pause, play, etc.",
      "Creating tables",
      "Storing metadata"
    ],
    answer: "Drawing lines, graphics, etc."
  },
  
  {
    section: "UI",
    question: "Which block of code will be executed?",
    options: [
      "p{<!-comment color: red; }",
      "p{/* comment */ color: red; }",
      "p{// comment color: red; }",
      "p{#comment color: red; }"
    ],
    answer: "p{/* comment */ color: red; }"
  },
  
  {
    section: "UI",
    question: "JavaScript runs using a script engine?",
    options: ["True", "False"],
    answer: "True"
  },
  
  {
    section: "UI",
    question: "Which statement is correct in JavaScript?",
    options: [
      "true and false are numeric values 1 and 0",
      "true and false are numeric values 0 and 1",
      "true is any nonzero value and false is 0",
      "true and false are nonnumeric values"
    ],
    answer: "true and false are nonnumeric values"
  },
  {
    section: "UI",
    question: "Which is not a CSS property?",
    options: [
      "background-render",
      "background-attachment",
      "background-repeat",
      "background-position"
    ],
    answer: "background-render"
  },
  
  
   {
    section: "UI",
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Common Style Sheets",
      "Central Style Sheets",
      "Control Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    section: "UI",
    question: "How would you define an ID selector in CSS?",
    options: [
      "ID selector as #",
      "ID selector as @",
      "ID selector as $",
      "None of the above"
    ],
    answer: "ID selector as #"
  },
  
  
  {
    section: "UI",
    question: "The __ JavaScript is also known as server-side JavaScript.",
    options: ["Navigator", "Microsoft", "LiveWire", "Native"],
    answer: "LiveWire"
  },
  
  {
    section: "UI",
    question: "How does JavaScript store the date in a Date object?",
    options: [
      "The number of seconds since Netscape's public stock offering",
      "The number of milliseconds since January 1st, 1970",
      "The number of days since January 1st, 1900",
      "None of the above"
    ],
    answer: "The number of milliseconds since January 1st, 1970"
  },
  
  {
    section: "UI",
    question: "Which of the following CSS syntax will hide the element?",
    options: [
      "h1.hidden {visibility: hidden;}",
      "h1.hidden {display: none;}",
      "h1.hidden {display: hidden;}",
      "h1.hidden {visibility: none;}"
    ],
    answer: "h1.hidden {display: none;}"
  },{
    "section": "UI",
    "question": "I cannot create a JS array by using the 'new' keyword.",
    "options": ["TRUE", "FALSE", "Only in strict mode", "Depends on the browser"],
    "answer": "FALSE"
  },
  
  {
    "section": "UI",
    "question": "Different tags cannot share the same class.",
    "options": ["TRUE", "FALSE", "Only with JavaScript", "Only if they're siblings"],
    "answer": "FALSE"
  },
  
  
  {
    "section": "UI",
    "question": "What does the display: block property result in?",
    "options": [
      "A line break between the two elements",
      "Two-line breaks between the two elements",
      "A tab spacing between the two elements",
      "No visual change"
    ],
    "answer": "A line break between the two elements"
  },
  {
    "section": "SQL",
    "question": "What is the full form of SQL?",
    "options": ["Structured Query List", "Structured Query Language", "Sample Query Language", "Sequential Query Logic"],
    "answer": "Structured Query Language"
  },
  {
    "section": "SQL",
    "question": "Which of the following is not a DDL command?",
    "options": ["TRUNCATE", "ALTER", "CREATE", "UPDATE"],
    "answer": "UPDATE"
  },
  {
    "section": "SQL",
    "question": "Which statement is used to delete all rows in a table without having the action logged?",
    "options": ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
    "answer": "TRUNCATE"
  },
  {
    "section": "SQL",
    "question": "How many Primary keys can you have in a table?",
    "options": ["Only 1", "Only 2", "Depends on number of Columns", "Depends on DBA"],
    "answer": "Only 1"
  },
  {
    "section": "SQL",
    "question": "Which of the following is not a Constraint in SQL?",
    "options": ["Primary Key", "Not Null", "Check", "Union"],
    "answer": "Union"
  },
  {
    "section": "SQL",
    "question": "Choose the incorrect variable declaration from the statements below:",
    "options": [
      "v_text number(10);",
      "v_text varchar2(10) = \"Hello world\";",
      "v_char char(1) = 'N';",
      "v_number varchar2(10);"
    ],
    "answer": "v_text varchar2(10) = \"Hello world\";"
  },
  {
    "section": "SQL",
    "question": "Which of the following is not a valid SQL type?",
    "options": ["FLOAT", "NUMERIC", "DECIMAL", "CHARACTER"],
    "answer": "CHARACTER"
  },
  {
    "section": "SQL",
    "question": "Which of the following are TCL commands?",
    "options": ["COMMIT and ROLLBACK", "UPDATE and TRUNCATE", "SELECT and INSERT", "GRANT and REVOKE"],
    "answer": "COMMIT and ROLLBACK"
  },
  {
    "section": "SQL",
    "question": "SQL Views are also known as:",
    "options": ["Simple tables", "Virtual tables", "Complex tables", "Actual Tables"],
    "answer": "Virtual tables"
  },
  {
    "section": "SQL",
    "question": "Which datatype can store unstructured data in a column?",
    "options": ["CHAR", "RAW", "NUMERIC", "TEXT"],
    "answer": "RAW"
  },
  {
    "section": "SQL",
    "question": "Which of the following is not a valid aggregate function?",
    "options": ["COUNT", "COMPUTE", "SUM", "MAX"],
    "answer": "COMPUTE"
  },
  {
    "section": "SQL",
    "question": "Which of the following is not a constraint in SQL?",
    "options": ["ISNULL", "CHECK", "PRIMARY KEY", "DEFAULT"],
    "answer": "ISNULL"
  },
  {
    "section": "SQL",
    "question": "Which operator is used to compare a value to a specified list of values?",
    "options": ["ANY", "BETWEEN", "ALL", "IN"],
    "answer": "IN"
  },
  {
    "section": "SQL",
    "question": "In which of the following cases is a DML statement not executed?",
    "options": ["When existing rows are modified.", "When a table is deleted.", "When some rows are deleted.", "All of the above"],
    "answer": "When a table is deleted."
  },
  {
    "section": "SQL",
    "question": "Which of the following statements is true?",
    "options": [
      "TRUNCATE frees the table space while DELETE does not.",
      "Both TRUNCATE and DELETE statements free the table's space.",
      "Both TRUNCATE and DELETE statements do not free the table's space.",
      "DELETE frees the table space while TRUNCATE does not."
    ],
    "answer": "TRUNCATE frees the table space while DELETE does not."
  },
  {
    "section": "SQL",
    "question": "Which of the following is also called an INNER JOIN?",
    "options": ["SELF JOIN", "EQUIJOIN", "NON-EQUI JOIN", "None of the above"],
    "answer": "EQUIJOIN"
  },
  {
    "section": "SQL",
    "question": "Which command makes the updates performed by the transaction permanent in the database?",
    "options": ["ROLLBACK", "COMMIT", "TRUNCATE", "DELETE"],
    "answer": "COMMIT"
  },
  {
    "section": "SQL",
    "question": "The COUNT function in SQL returns the number of",
    "options": ["Unique values", "Group by values", "None", "Not null values"],
    "answer": "Not null values"
  },
  {
    "section": "SQL",
    "question": "What operator tests a column for the absence of data?",
    "options": ["NOT Operator", "EXISTS Operator", "IS NULL Operator", "None of the above"],
    "answer": "IS NULL Operator"
  },
 
  {
    "section": "SQL",
    "question": "If we have not specified ASC or DESC after a SQL ORDER BY clause, the following is used by default:",
    "options": ["DESC", "ASC", "There is no default value", "None of the mentioned"],
    "answer": "ASC"
  },
  {
    "section": "SQL",
    "question": "A command that lets you change one or more fields in a table is:",
    "options": ["INSERT", "MODIFY", "LOOK-UP", "All of the above"],
    "answer": "MODIFY"
  },
  {
    "section": "SQL",
    "question": "Which of the following is true about the HAVING clause?",
    "options": [
      "Similar to the WHERE clause but is used for columns rather than groups.",
      "Similar to the WHERE clause but is used for rows rather than columns.",
      "Similar to the WHERE clause but is used for groups rather than rows.",
      "Acts exactly like a WHERE clause."
    ],
    "answer": "Similar to the WHERE clause but is used for groups rather than rows."
  },
  {
    "section": "SQL",
    "question": "Which command is used to change the definition of a table in SQL?",
    "options": ["CREATE", "UPDATE", "ALTER", "SELECT"],
    "answer": "ALTER"
  },
  {
    "section": "SQL",
    "question": "CREATE TABLE Students(ROLL_NO NUMBER(5) PRIMARY KEY, NAME VARCHAR(50)); ALTER TABLE Students ADD PRIMARY KEY(ROLL_NO);",
    "options": [
      "Invalid statement",
      "Table can have only one primary key",
      "Primary key cannot be duplicated",
      "ROLL_NO is invalid"
    ],
    "answer": "Table can have only one primary key"
  },
  {
    "section": "SQL",
    "question": "Which type of JOIN returns rows that do not have matching values?",
    "options": ["Natural JOIN", "Outer JOIN", "EQUIJOIN", "All of the above"],
    "answer": "Outer JOIN"
  },
  {
    "section": "SQL",
    "question": "Which operator is used to compare the NULL values in SQL?",
    "options": ["Equal", "IN", "IS", "None of the Above"],
    "answer": "IS"
  },
  {
    "section": "SQL",
    "question": "Which is NOT a type of constraint in SQL language?",
    "options": ["FOREIGN KEY", "PRIMARY KEY", "UNIQUE", "ALTERNATE KEY"],
    "answer": "ALTERNATE KEY"
  },
  {
    "section": "SQL",
    "question": "Which statement is used to get all data from the student table whose name starts with 'p'?",
    "options": [
      "SELECT * FROM student WHERE name LIKE '%p%';",
      "SELECT * FROM student WHERE name LIKE 'p%';",
      "SELECT * FROM student WHERE name LIKE '_p%';",
      "SELECT * FROM student WHERE name LIKE '%p';"
    ],
    "answer": "SELECT * FROM student WHERE name LIKE 'p%';"
  },
  {
    "section": "SQL",
    "question": "How many types of indices are present in SQL Server?",
    "options": ["2", "1", "3", "4"],
    "answer": "2"
  },
  {
    "section": "SQL",
    "question": "Which is the invalid command in SQL?",
    "options": ["Revoke", "Join", "Fetch", "Like"],
    "answer": "Fetch"
  },{
    "section": "PLSQL",
    "question": "PL/SQL stands for:",
    "options": ["Programming Language/SQL", "Procedural Language/SQL", "Portable Language/SQL", "None of the above"],
    "answer": "Procedural Language/SQL"
  },
  {
    "section": "PLSQL",
    "question": "Which datatypes can be used with a RECORD type?",
    "options": ["NUMBER, VARCHAR2", "%TYPE, OR S%ROWTYPE", "REF, CURSOR", "BothA&B"],
    "answer": "BothA&B"
  },
  {
    "section": "PLSQL",
    "question": "In PL/SQL, a warning or error condition is called an exception.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "section": "PLSQL",
    "question": "Nulls in PL/SQL can be assigned and equated with anything, including itself.",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "section": "PLSQL",
    "question": "What type of join is used in the following statement? SELECT column_name(s) FROM table1 T1, table2 T2 WHERE condition;",
    "options": ["Self Join", "Inner Join", "Outer Join", "Left Outer Join"],
    "answer": "Inner Join"
  },
  {
    "section": "PLSQL",
    "question": "A PL/SQL question involving global variables and local variables.",
    "options": ["95,95", "95,195", "195,195", "Error"],
    "answer": "Error"
  },
  {
    "section": "PLSQL",
    "question": "In PL/SQL, the upward-to-lower flow in a loop is called...?",
    "options": ["Inverse", "Reverse", "Backward", "None"],
    "answer": "Reverse"
  },
  {
    "section": "PLSQL",
    "question": "Which are the types of conditional statements in PL/SQL?",
    "options": [
      "IF THEN END IF, IF THEN ELSE END IF, IF THEN ELSEIF END IF",
      "IF THEN END IF, IF THEN ELSE END IF, IF THEN ELSIF END IF",
      "IF THEN END IF, IF THEN ELSE END, IF THEN ELSEIF END",
      "IF THEN END IF, IF THEN ELSE END, IF THEN ELSIF END"
    ],
    "answer": "IF THEN END IF, IF THEN ELSE END IF, IF THEN ELSIF END IF"
  },
  {
    "section": "PLSQL",
    "question": "Given sales data from multiple stores: Store A: 300 Store B: 200 Store C: 100 Store D: NULL. What is the average sales?",
    "options": ["600/3 = 200", "600/4 = 150", "Error"],
    "answer": "600/3 = 200"
  },
  {
    "section": "PLSQL",
    "question": "What is the output of the following query? SELECT LEFT('Welcome to PLSQL', 3);",
    "options": ["Wel", "Error", "SQL", "We"],
    "answer": "Wel"
  },
  {
    "section": "PLSQL",
    "question": "How many nested IF clauses can be included within an IF clause?",
    "options": ["1", "0", "15", "Any number"],
    "answer": "Any number"
  },
  {
    "section": "PLSQL",
    "question": "Arrays in other languages become varrays in PL/SQL.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "section": "PLSQL",
    "question": "A collection is an ordered group of elements, all of the same type.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "section": "PLSQL",
    "question": "A function called from SQL statements must obey certain rules meant to control side effects.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "section": "PLSQL",
    "question": "The DBMS_SQL package should be used in which of the following situations?",
    "options": [
      "There is an unknown number of input or output variables, such as the number of column values returned by a query that are used in a dynamic SQL statement.",
      "The dynamic code is too large to fit inside a 32K bytes VARCHAR2 variable.",
      "BothA&B",
      "None of the above"
    ],
    "answer": "BothA&B"
  },{
    "section": "PLSQL",
    "question": "How many attributes does every explicit cursor and cursor variable have?",
    "options": ["3", "2", "4", "5"],
    "answer": "4"
  },
  {
    "section": "PLSQL",
    "question": "Which operator returns TRUE if a subquery returns at least one row?",
    "options": ["EXISTS", "IN", "IS NULL", "LIKE"],
    "answer": "EXISTS"
  },
  {
    "section": "PLSQL",
    "question": "Which of the following is used to define code that is executed/fired when certain actions or events occur?",
    "options": ["Replace", "Keyword", "Trigger", "Cursor"],
    "answer": "Trigger"
  },
  {
    "section": "PLSQL",
    "question": "Which parameter acts like a constant inside the subprogram?",
    "options": ["IN", "OUT", "BothA&B", "None of the above"],
    "answer": "IN"
  },
  {
    "section": "PLSQL",
    "question": "Which statement lets you create standalone functions that are stored in an Oracle database?",
    "options": ["SQL CREATE PROCEDURE", "SQL CREATE FUNCTION", "BothA&B", "None of the above"],
    "answer": "SQL CREATE FUNCTION"
  },
  {
    "section": "PLSQL",
    "question": "PL/SQL packages are schema objects that group logically related PL/SQL types, variables, and subprograms.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "section": "PLSQL",
    "question": "What is the clause required in a function body to return a variable?",
    "options": ["RETURN", "RETURN VARCHAR2(20)", "RETURN VARCHAR2"],
    "answer": "RETURN"
  },
  {
    "section": "PLSQL",
    "question": "A cursor should be declared in the BEGIN block in PL/SQL.",
    "options": ["False", "True"],
    "answer": "False"
  },
  {
    "section": "PLSQL",
    "question": "PL/SQL provides a feature to handle exceptions in a PL/SQL block known as exception handling.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "section": "PLSQL",
    "question": "The WRAP command is used to encrypt a PL/SQL application.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "section": "PLSQL",
    "question": "Which exception is also known as an Oracle named exception handler?",
    "options": ["Predefined Exception", "Internal Exception", "User-defined Exception", "None of the above"],
    "answer": "Predefined Exception"
  },
  {
    "section": "PLSQL",
    "question": "Which package lets you use database triggers to alert an application when specific database values change?",
    "options": ["DBMS_OUTPUT", "DBMS_ALERT", "DBMS_PIPE", "All of the above"],
    "answer": "DBMS_ALERT"
  },{
    "section": "Java",
    "question": "Select the valid statement.",
    "options": [
      "char[] ch = new char(5);",
      "char[] ch = new char[5];",
      "char[] ch = new char();",
      "char[] ch = new char[];"
    ],
    "answer": "char[] ch = new char[5];"
  },
  {
    "section": "Java",
    "question": "Automatic type conversion is not possible in which case?",
    "options": ["Byte to int", "Int to long", "Long to int", "Short to int"],
    "answer": "Long to int"
  },
  {
    "section": "Java",
    "question": "What is the size of float and double in Java?",
    "options": ["32 and 64", "32 and 32", "64 and 64", "64 and 32"],
    "answer": "32 and 64"
  },
  {
    "section": "Java",
    "question": "Number of primitive data types in Java are?",
    "options": ["6", "7", "8", "9"],
    "answer": "8"
  },
  {
    "section": "Java",
    "question": "Predict the output of the program: String str = \"I like Java\"; System.out.println(str.length());",
    "options": ["12", "11", "10", "9"],
    "answer": "11"
  },
  {
    "section": "Java",
    "question": "Predict the output of the program: String s = {\"hybernate\", \"java\", \"object\"}; Arrays.sort(s); for(String k : s) { System.out.println(k); }",
    "options": [
      "java hybernate object",
      "hybernate java object",
      "hybernate object java",
      "object java hibernate"
    ],
    "answer": "hybernate java object"
  },
  {
    "section": "Java",
    "question": "Predict the output of the program: char ch = 127; ch++; System.out.println(ch + \" =\" + (int)ch);",
    "options": [
      "compilation error",
      "?=128",
      "garbage value = -128",
      "none of the above"
    ],
    "answer": "garbage value = -128"
  },
  {
    "section": "Java",
    "question": "_____ is also known as a Static variable.",
    "options": ["class variable", "instance variable", "local variable", "all of the above"],
    "answer": "class variable"
  },
  {
    "section": "Java",
    "question": "Object includes?",
    "options": ["Attributes", "Behaviour", "Both", "None"],
    "answer": "Both"
  },
  {
    "section": "Java",
    "question": "To find the length of the string:",
    "options": ["a.length;", "a.length()"],
    "answer": "a.length()"
  },
  {
    "section": "Java",
    "question": "Which operator gives a result if no condition satisfies?",
    "options": ["IN", "OR", "NOT", "AND"],
    "answer": "NOT"
  },
  {
    "section": "Java",
    "question": "Which is not the correct declaration?",
    "options": ["inta_1", "int1_a", "int Al", "None"],
    "answer": "int1_a"
  },
  {
    "section": "Java",
    "question": "Tick the correct one:",
    "options": [
      "Java is platform-independent",
      "JVM is platform-dependent",
      "JVM converts bytecode into machine-level code",
      "All of these"
    ],
    "answer": "All of these"
  },
  {
    "section": "Java",
    "question": "Given the code snippet: static int a = 1; void Inc() { a++; System.out.println(a); } Inc(); Inc();",
    "options": ["1,1", "1,2", "2,3", "2,2"],
    "answer": "2,3"
  },
  {
    "section": "Java",
    "question": "Which among the following falls under key elements of programming?",
    "options": [
      "Good analytical skills",
      "Declarative knowledge",
      "Imperative knowledge",
      "Abstraction knowledge in programming",
      "All of these"
    ],
    "answer": "All of these"
  },
  {
    "section": "Java",
    "question": "What is the extension of Java code files?",
    "options": [".java", ".class", "Both1and2", ".txt"],
    "answer": ".java"
  },
  {
    "section": "Java",
    "question": "Which is not an OOP concept?",
    "options": ["Compilation", "Polymorphism", "Encapsulation", "Inheritance"],
    "answer": "Compilation"
  },
  {
    "section": "Java",
    "question": "Select the valid statement to declare and initialize an array.",
    "options": [
      "int[] A=0;",
      "int[] A = [1,2,3];",
      "int[] A = (1,2,3);",
      "int[] A = {1,2,3};"
    ],
    "answer": "int[] A = {1,2,3};"
  },
  {
    "section": "Java",
    "question": "Arrays in Java are:",
    "options": ["Object references", "Objects", "Primitive data type", "None"],
    "answer": "Objects"
  },
  {
    "section": "Java",
    "question": "Identify the correct definition of a package.",
    "options": [
      "A package is a collection of editing tools",
      "A package is a collection of classes",
      "A package is a collection of classes and interfaces",
      "A package is a collection of interfaces"
    ],
    "answer": "A package is a collection of classes and interfaces"
  },{
    "section": "Java",
    "question": "In which of the following is the toString() method defined?",
    "options": ["java.lang.Object", "java.lang.String", "java.util", "None"],
    "answer": "java.lang.Object"
  },
  {
    "section": "Java",
    "question": "What is the output of the following code?\nimport java.util.Scanner;\npublic class Solution {\nprivate String name = \"TATA\";\npublic static void main(String[] args) {\nSolution t = (Solution) new Object();\nSystem.out.println(t.name);\n}}",
    "options": ["Runtime error", "TATA", "Compile error", "None of the above"],
    "answer": "Runtime error"
  },
  {
    "section": "Java",
    "question": "What is the output of the following code?\npublic static void main(String[] args) {\nint var1 = 1;\nif (var1)\nSystem.out.println(\"Inside If Condition\");\n}",
    "options": ["Inside If Condition", "Does not print anything", "Compilation error", "Runtime error"],
    "answer": "Compilation error"
  },
  {
    "section": "Java",
    "question": "What is the output of the following code?\npublic static void main(String[] args) {\nint var1;\nif (var1 == 0)\nSystem.out.println(\"Inside If Condition\");\n}",
    "options": ["Inside If Condition", "Does not print anything", "Compilation error", "Runtime error"],
    "answer": "Compilation error"
  },
  {
    "section": "Java",
    "question": "Which modifier can be used to prevent any method or attribute from being visible to external classes?",
    "options": ["Private", "Public", "Protected", "Default"],
    "answer": "Private"
  },
  {
    "section": "Java",
    "question": "Which modifier can be used to restrict a method or attribute from being visible outside its package?",
    "options": ["Private", "Public", "Protected", "Default (No modifier)"],
    "answer": "Default (No modifier)"
  },
  {
    "section": "Java",
    "question": "If a package name contains more than one word, the words must be separated by...",
    "options": ["Comma", "Dot", "Hyphen", "underscore"],
    "answer": "Dot"
  },
  {
    "section": "Java",
    "question": "Which component is used to compile, debug, and execute a Java program?",
    "options": ["JIT", "JRE", "JVM", "JDK"],
    "answer": "JDK"
  },
  {
    "section": "Java",
    "question": "What is the extension of compiled Java classes?",
    "options": [".java", ".txt", ".class", ".exe"],
    "answer": ".class"
  },
  {
    "section": "Java",
    "question": "Which of these cannot be used as a variable name in Java?",
    "options": ["Identifier & keyword", "Keyword", "Identifier", "None of these"],
    "answer": "Keyword"
  },
  {
    "section": "Java",
    "question": "What does the expression `expression1 ? expression2 : expression3` return?",
    "options": ["Float", "Integer", "Boolean", "String"],
    "answer": "Boolean"
  },
  {
    "section": "Java",
    "question": "Which of these is a long data type literal?",
    "options": ["0x99fffa", "0x99fffL", "99671246", "99671246L"],
    "answer": "0x99fffL"
  },
  {
    "section": "Java",
    "question": "Which of these is the superclass of every class in Java?",
    "options": ["String class", "Object class", "Abstract class", "ArrayList class"],
    "answer": "Object class"
  },
  {
    "section": "Java",
    "question": "Which of these keywords can be used to prevent inheritance of a class?",
    "options": ["Constant", "Class", "Super", "Final"],
    "answer": "Final"
  },
  {
    "section": "Java",
    "question": "What is the output of the following code?\nimport java.util.Scanner;\npublic class Solution {\npublic static void main(String[] args) {\ndouble d1 = 50; float d2 = 10;\nfloat d3 = d1 / d2;\nSystem.out.println(d3);\n}}",
    "options": ["Runtime error", "5.0", "Compile error", "5.0f"],
    "answer": "Compile error"
  },
  {
    "section": "Java",
    "question": "Which of the following is correct about JVM?",
    "options": [
      "JVM is responsible for converting bytecode to machine-specific code",
      "JVM is platform-dependent and provides core Java functionality",
      "Both a and b",
      "None of these"
    ],
    "answer": "Both a and b"
  },
  {
    "section": "Java",
    "question": "Strings in Java are mutable.",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "section": "Java",
    "question": "What is the output of the following code?\nimport java.util.Scanner;\npublic class Solution {\npublic static void main(String[] args) {\nbyte b = 200;\nSystem.out.println(b);\n}}",
    "options": ["200", "Compile error", "Runtime error", "-127"],
    "answer": "Compile error"
  },
  {
    "section": "Java",
    "question": "What is Runnable?",
    "options": ["Abstract class", "Interface", "Class", "Method"],
    "answer": "Interface"
  },
  {
    "section": "Java",
    "question": "Identify the infinite loop.",
    "options": [
      "for(;;)",
      "for(int i = 0; i < 1; i--)",
      "for(int i = 0; ; i++)",
      "All of the above"
    ],
    "answer": "All of the above"
  }
];

