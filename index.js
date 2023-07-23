const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate the license badge URL
function getLicenseBadgeURL(license) {
  switch (license) {
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'Apache':
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
    case 'GPL':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    default: 
      return '';
  }
}

// Function to generate the README content based on user input
function generateREADME(answers) {
  const licenseBadgeURL = getLicenseBadgeURL(answers.license);

  return `
# ${answers.title}

${licenseBadgeURL ? `[![License](${licenseBadgeURL})](https://opensource.org/licenses/${answers.license})` : ''}
  
## Description
${answers.description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation <a name='installation'></a>
${answers.installation ? answers.installation : 'NA'}

## Usage <a name='usage'></a>
${answers.usage}
  
## License <a name='license'></a>
This application is covered under the ${answers.license} license. For more details, see the [License](https://opensource.org/licenses/${answers.license}) file.
  
## Contributing <a name='contributing'></a>
${answers.contributing}
  
## Tests <a name='tests'></a>
${answers.tests}
  
## Questions <a name='questions'></a>
For any questions, please feel free to reach out through the following channels:
- Email: ${answers.email}
- Github: [${answers.username}](https://github.com/${answers.username})
`;
}

// Prompt the user with questions
inquirer
  .prompt([
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
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
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
      message: 'Enter your Github username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    const READMEContent = generateREADME(answers);

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