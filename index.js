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

// Prompt the user with questions
inquirer
.prompt ([
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a project description:',
  },
  {
    type: 'input',
    name: 'instalaltion',
    message: 'Enter installation instructions:',
  },
  { 
    type: 'input',
    name: 'usage',
    message:'Provide usage information:',
  },
  {
    type: 'list',
    name: 'licence',
    message: 'Choose  a licence for your application:',
    choices: ['MIT', 'Apache', 'GPL', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your Github username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
])
.then((answers) => {
  const READMEContent = generatorREADME(answers);

  // Create the README file
  fs.writeFile('README.md', READMEContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README.md successfully created!');
  });
})
.catch((error) => {
  console.error(error);
});