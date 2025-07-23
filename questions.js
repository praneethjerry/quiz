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
    question: "What is the correct syntax to write an HTML comment?",
    options: ["<!-- Comment -->", "// Comment", "#Comment", "/* Comment */"],
    answer: "<!-- Comment -->"
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
    question: "Which is the invalid field in HTML5?",
    options: ["Day", "Date", "Datetime", "Month"],
    answer: "Datetime"
  },
  {
    section: "UI",
    question: "How do you emphasize text in HTML?",
    options: ["<strong>", "<em>", "<b>", "<mark>"],
    answer: "<em>"
  },
  {
    section: "UI",
    question: "Which tag is not used for formatting text?",
    options: ["<b>", "<p>", "<strong>", "<i>"],
    answer: "<p>"
  },
  
  {
    section: "UI",
    question: "How to create an ordered list in HTML?",
    options: ["<ul>", "<ol>", "<href>", "<b>"],
    answer: "<ol>"
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
    question: "The <caption> tag is used with:",
    options: ["Image", "Table", "Both", "None"],
    answer: "Table"
  },
  {
    section: "UI",
    question: "What will the result of var x = 100 + 5 ** 3 be in JS?",
    options: ["125", "225", "NaN", "Error"],
    answer: "225"
  },
  {
    section: "UI",
    question: "Given the following HTML: <p>Top news</p> <blockquote url: Hindu news.com></blockquote>. Will the blockquote display?",
    options: ["True", "False"],
    answer: "True"
  },
  {
    section: "UI",
    question: "Which tag is used to emphasize the text?",
    options: ["<b>", "<strong>", "<em> or <emph>", "<mark>"],
    answer: "<em> or <emph>"
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
    question: "Which HTML tag is used to display a progress bar?",
    options: ["<progress>", "<bar>", "<meter>", "<track>"],
    answer: "<progress>"
  },{
    section: "UI",
    question: "Given the following HTML: <img src='sky.jpg' width='100' height='100' opacity='0.25'> What will happen?",
    options: [
      "Display with mentioned width and height",
      "Display image as watermark",
      "None of these",
      "Opacity attribute is invalid in HTML"
    ],
    answer: "Display image as watermark"
  },
  {
    section: "UI",
    question: "Appearance of the <ins> tag?",
    options: ["Italics", "Underline", "Bold", "Strikethrough"],
    answer: "Underline"
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
    question: "What is <span> used for?",
    options: [
      "To select inline block",
      "To group elements for styling purposes",
      "To draw borders",
      "To insert scripts"
    ],
    answer: "To group elements for styling purposes"
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
    question: "Which block is used to style the <h1> tag with class 'Xplore'? <h1 class='Xplore'>",
    options: [
      "h1 > .Xplore {....}",
      "h1{....}",
      "h1.xplore {....}",
      ".h1.Xplore {....}"
    ],
    answer: "h1.xplore {....}"
  },
  {
    section: "UI",
    question: "JavaScript runs using a script engine?",
    options: ["True", "False"],
    answer: "True"
  },
  {
    section: "UI",
    question: "Given the following code: <p class='abc'></p> <script> var x; document.getElementByClass('abc').innerHTML = x; </script> What is the output?",
    options: ["NaN", "0", "1", "Error"],
    answer: "Error"
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
    question: "Given the following HTML: <p class='A'>ABC</p> How do you style 'ABC'?",
    options: [
      ".A {color: red;}",
      "#A {color: red;}",
      "*A {color: red;}",
      "A {color: red;}"
    ],
    answer: ".A {color: red;}"
  },
  {
    section: "UI",
    question: "Which of the following sequences of HTML tags is correct?",
    options: [
      "<html><head><title></title><body></body></head></html>",
      "<html><title></title><head></head><body></body></html>",
      "<html><head></head><body><title></title></body></html>",
      "<html><head><title></title></head><body></body></html>"
    ],
    answer: "<html><head><title></title></head><body></body></html>"
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
    question: "In an HTML document, where is the correct place to refer to an external style sheet?",
    options: [
      "In the <head> section",
      "At the end of the document",
      "At the beginning of the document",
      "In the <body> section"
    ],
    answer: "In the <head> section"
  },
  {
    section: "UI",
    question: "Which of the following tags would you use to insert JavaScript in an HTML page?",
    options: [
      "<script type=\"text/javascript\"></script>",
      "<HTMLScript type=\"text/javascript\"></HTMLScript>",
      "<JScript type=\"text/javascript\"></JScript>",
      "<JavaScript type=\"text/javascript\"></JavaScript>"
    ],
    answer: "<script type=\"text/javascript\"></script>"
  },
  {
    section: "UI",
    question: "The __ JavaScript is also known as server-side JavaScript.",
    options: ["Navigator", "Microsoft", "LiveWire", "Native"],
    answer: "LiveWire"
  },
  {
    section: "UI",
    question: "The following code would allow you to set the background with CSS:\n<style type=\"text/css\"> body {background-color: yellow} </style>",
    options: ["True", "False"],
    answer: "True"
  },
  {
    section: "UI",
    question: "If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
    options: [
      "para1.firstChild.nodeValue= \"New Text\";",
      "para1.nodeValue=\"New Text\";",
      "\"New Text\"?",
      "para1.value=\"New Text\";"
    ],
    answer: "para1.firstChild.nodeValue= \"New Text\";"
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
    question: "Given the following HTML:\n<h2 class=\"fruit mango\">I love fruits</h2>\nWhich statement is true?",
    options: [
      "It is an invalid statement in HTML.",
      "None of the options.",
      "It is a heading tag with a class named \"fruit mango.\"",
      "It is a heading tag with two classes named \"fruit\" and \"mango.\""
    ],
    answer: "It is a heading tag with two classes named \"fruit\" and \"mango.\""
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
    "question": "Which of the following elements were added in HTML5?",
    "options": ["<main>", "<header>", "<article>", "All of them"],
    "answer": "All of them"
  },
  {
    "section": "UI",
    "question": "Different tags cannot share the same class.",
    "options": ["TRUE", "FALSE", "Only with JavaScript", "Only if they're siblings"],
    "answer": "FALSE"
  },
  {
    "section": "UI",
    "question": "The <div> element is a block-level element.",
    "options": ["TRUE", "FALSE", "Only in HTML5", "It depends on CSS"],
    "answer": "TRUE"
  },
  {
    "section": "UI",
    "question": "Which option correctly represents the code for creating and initializing a string variable?",
    "options": ["var str1=Hello;", "var str1=\"Hello\";", "var str1='Hello';", "var str1=\"Hello\"\";"],
    "answer": "var str1=\"Hello\";"
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
    "section": "UI",
    "question": "Which of the following options will open the Google website in a new window?",
    "options": [
      "<a href=\"https://www.google.com\" target=\"_top\">Click here</a>",
      "<a href=\"https://www.google.com\" target=\"_parent\">Click here</a>",
      "<a href=\"https://www.google.com\" target=\"_self\">Click here</a>",
      "<a href=\"https://www.google.com\" target=\"_blank\">Click here</a>"
    ],
    "answer": "<a href=\"https://www.google.com\" target=\"_blank\">Click here</a>"
  }
];

