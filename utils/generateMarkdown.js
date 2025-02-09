// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
// different color badge for the 3 sample badges. 
  if (license !== 'MIT')  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  else if (license !== 'GPL 3.0')  return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`;
  else if (license !== 'Unlicense')  return `![GitHub license](https://img.shields.io/badge/license-${license}-red.svg)`;
  else return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') return `\n* [License](#license)\n`;
  else return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

${renderLicenseBadge(license)}
This project is licensed under the ${license} license.`;
  }
  else return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description
  
${data.description}
  
## Table of Contents 
  
* [Installation](#installation)
  
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
  
* [Tests](#tests)
  
* [Questions](#questions)
  
## Installation
  
To install necessary dependencies, run the following command:
  
${data.installation}
  
## Usage
  
${data.usage}
  
${renderLicenseSection(data.license)}
    
## Contributing
  
${data.contributing}
  
## Tests
  
To run tests, run the following command:
  
${data.test}

## Questions
  
If you have any questions about the repo, open an issue or contact me at ${data.email}. 
You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  
`;
}

module.exports = generateMarkdown;
