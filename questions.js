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
      "JAVA_HOME=`/usr/libexec/java-home -v 11.0`"
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
  }
];


