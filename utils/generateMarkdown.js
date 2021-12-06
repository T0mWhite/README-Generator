// A function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string

function renderLicenseBadge(answers) {
  const { license, creatorName, createdYear } = answers;
  if (license === "Coffeeware") {
    return `
![License: Coffeeware](https://raw.githubusercontent.com/Sonic853/coffeeware-license/master/coffeeware-logo.png)
        `
  } else if (license === "MIT") {
    return `
![License: MIT](https://opensource.org/licenses/MIT)
`
  } else if (license === "Apache") {
    return `
![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
`
  } else return "";
}

// A function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(answers) {
  const { license } = answers;
  if (license === "Coffeeware") {
    return `
[Coffeeware](https://github.com/Sonic853/coffeeware-license)
    `;
  } else if (license === "MIT") {
    return `
[MIT](https://mit-license.org/)
    `;
  } else if (license === "Apache") {
    return `
[Apache](http://www.apache.org/licenses/LICENSE-2.0)
    `;
  } else return "";
};

// A function to generate markdown for README

function generateMarkdown(answers) {
  console.log(answers);

  const {
    createdYear,
    title,
    description,
    tableOfContents,
    installation,
    usage,
    license,
    contributing,
    tests,
    github,
    questions,
    email,
  } = answers;

  return `# ${title}

  ## Description
  
  <!-- ${description} -->
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  
  ## Installation
  
${installation}
  
  ## Usage
  
${usage}
  
  ## License

${renderLicenseLink(answers)} License
${renderLicenseBadge(answers)}
  
  ## Contributing
  
${contributing}
  
  ## Tests
  
${tests}
  
  ## Questions
  
${questions}
  
  #### Github
  
  https://github.com/${github}
  
  #### Email
  
${email}
  
  
  
  `;
}

module.exports = generateMarkdown;
