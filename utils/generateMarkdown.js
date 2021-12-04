// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  const {
    license,
    creatorName,
    createdYear
  } = answers;
  if (license === "Coffeeware") {
    return `

    ![License: Coffeeware](https://raw.githubusercontent.com/Sonic853/coffeeware-license/master/coffeeware-logo.png)
    
    **"THE COFFEEWARE LICENSE" (Revision 2):**

    ${creatorName} wrote this code. As long as you retain this notice you
    can do whatever you want with this stuff. If we meet some day, and you think 
    this stuff is worth it, you can buy me a coffee in return. 
    
    Also, you might consider emailing for any comments and/or 
    questions you might have and if you'd like you can send me a donation 
    at any time to support my work, ask me how!
    `;
  } else if (license === "MIT") {
    return `
    ![License: MIT](https://opensource.org/licenses/MIT)
    
    The MIT License (MIT)

    Copyright © ${createdYear} ${creatorName}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `;
  } else if (license === "Apache") {
    return `
    ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
    
    Copyright ${createdYear} ${creatorName}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;
  } else return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  const {
    license
  } = answers;
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  const {
    license
  } = answers;
  if (license === "Coffeeware") {
    return `
    [Coffeeware]
    `;
  } else if (license === "MIT") {
    return `
    [MIT]
    `;
  } else if (license === "Apache") {
    return `
    [Apache]
    `;
  } else return "";
};

// TODO: Create a function to generate markdown for README

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
  
  - [Installation](##Installation)
  - [Usage](#usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Tests)
  
  
  
  ## Installation
  
${installation}
  
  ## Usage
  
${usage}
  
  ## License

${renderLicenseBadge(answers)}
${license}
  
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
};

module.exports = generateMarkdown;
