const inquirer = require('inquirer');
const fs = require('fs');

const licenseBadge= {
  'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
  'Creative Commons Attribution 4.0 International': '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the project description: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license: ',
        choices: Object.keys(licenseBadge),
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter any contributors: ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the tests: ',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your GitHub email: ',
    }
    
  ])




  .then((data) => {
    const chosenLicenseBadge = licenseBadge[data.license];
    console.log(data);
    var readMe = `# ${data.title} \n ${chosenLicenseBadge} \n ## Table of Contents \n
     \n 1. [Description](#description) \n 2. [Installation](#installation) \n 3. [Usage](#usage) \n 4. [License](#license)
     \n 5. [Contributing](#contributing) \n 6. [Tests](#tests) \n 7. [Username](#username) \n 8. [Email](#email)
     \n ## Description \n ${data.description} \n ## Installation \n ${data.installation} \n ## Usage \n ${data.usage}
     \n ## License \n ${data.license} \n ## Contributing \n ${data.contributing} \n ## Tests \n ${data.tests}
     \n ## Username \n ${data.username} \n ## Email \n ${data.email}`;
    fs.writeFile("README.md", readMe, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});