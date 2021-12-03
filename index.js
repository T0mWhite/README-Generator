// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of this project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for this project:',
    },
    {
      type: 'input',
      name: 'table of contents',
      message: 'Enter the table of contents:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install this application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does the user interact with this application',
    },
    {
      type: 'checkbox',
      name: 'License',
      message: 'Which license is this application covered under?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Which license is this application covered under?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How does a user contribute to this application?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How can you test this application?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'How can a user ask additional questions?',
    },
  ];




//   title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

inquirer
  .prompt()
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
