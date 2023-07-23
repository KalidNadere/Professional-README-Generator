
# Professional README Generator

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## Description
it's important to have a command-line application that generates a professional README file for a new project, based on user input. This README file is built using Node.js, and utilises the Inquirer library to prompt the user with questions about the project. The user provides information, e.g. project title, description, installation instructions, usage information, contribution guidelines, test intructions, chosen license, Github username and email address.

The README generator includes the following main functions:
- `getLicenseBadgeURL(License)`: This function takes the selected license as input and returns the URL for the corresponding license badge. It maps the license name to the correct badge URL, which will be displayed in the generated README
- `generateREADME(answers)`: This function receives the user's answers fromt the Inquirer prompts and constructs the content of the README file using a template literal. It uses the information provided by the user to populate different sections of the README, such as the project title, description etc.
- Inquirer Prompts: The application uses the Inquirer to prompt the user with series of questions about their project. The user's responses are then passed to the `generateREADME` function to create the README content.
- File Writing: Once the README content is generated, the application writes it to a file named `README.md` in the current working directory using the `fs.writeFile` method.

Benefits and Usefulness:
- Time-Saving
- Consistency
- Professional Look
- Ease of Use
- License Management
- Documentation
- Consolidated Information
- Community Engagement

This application has not been deployed, therefore, I have provided a [README Generator Demo](https://www.youtube.com/watch?v=l07XSCTBMcY&ab_channel=KalidNadere), that demonstrates its functionality:



The application will be invoked by running the following command:
- node index.js

## Screenshot of the command line functionality of the README Generator
![README Generator-Screenshot](https://github.com/KalidNadere/Professional-README-Generator/assets/131591052/cf180a5f-4bd7-461c-84ed-9cb04a815981)

![Screenshot 2023-07-23 at 10 42 55 pm](https://github.com/KalidNadere/Professional-README-Generator/assets/131591052/3ed10ff6-2cd1-4d90-a37c-43b0c04a0658)

![Screenshot 2023-07-23 at 10 43 26 pm](https://github.com/KalidNadere/Professional-README-Generator/assets/131591052/ac8bd4cb-a7c7-4811-9e32-86419c2ebf39)

  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation <a name='installation'></a>
Use npm install

## Usage <a name='usage'></a>
 Use it with any Github project
  
## License <a name='license'></a>
This application is covered under the MIT license. For more details, see the [License](https://opensource.org/licenses/MIT) file.
  
## Contributing <a name='contributing'></a>
Fork the repo, then contribute by coding
  
## Tests <a name='tests'></a>
Use unit testing with Jest
  
## Questions <a name='questions'></a>
For any questions, please feel free to reach out through the following channels:
- Email: luca-n@live.com
- Github: [KalidNadere](https://github.com/KalidNadere)
