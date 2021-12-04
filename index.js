// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "createdYear",
    message: "What year was the software created?",
  },
  {
    type: "input",
    name: "creatorName",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of this project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for this project:",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install this application?",
  },
  {
    type: "input",
    name: "usage",
    message: "How does the user interact with this application",
  },
  {
    type: "list",
    name: "license",
    message: "Which license is this application covered under?",
    choices: [
      new inquirer.Separator(" = Licenses = "),
      {
        name: "Coffeeware",
      },
      {
        name: "MIT",
      },
      {
        name: "Apache",
      },
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "How does a user contribute to this application?",
  },
  {
    type: "input",
    name: "tests",
    message: "How can you test this application?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "questions",
    message: "How can a user ask additional questions?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];
//   title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create a function to write README file
// function writeToFile() {
// generateMarkdown();
// };

// Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    const filename = `README.md`;
    console.log(answers);
    // fs.appendFile(filename, "", (err) =>
    // err ? console.error(err) : console.log("File made")
    // );

    fs.writeFile(filename, generateMarkdown(answers), (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
  // writeToFile();
}

// // Function call to initialize app
init();
