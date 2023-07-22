const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate the README content based on user input
function generateREADME(answers) {
  return `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.usage}
  
  ## Licence
  ${answers.licence}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  For any questions, please feel free to reach out through the following channels:
  - Email: ${answers.email}
  - Github: [${answers.username}](https://github.com/${answers.username})
  `;
}