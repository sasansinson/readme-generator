// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseString = "";
  if (license === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (license === "Mozilla Public License 2.0") {
    licenseString = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  };
  if (license === "Apache 2.0 License") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    };
  if (license === "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  return licenseString
  };



// Function that returns the license link
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = `(https://opensource.org/licenses/MIT)`
  };
  if (license === "Mozilla Public License 2.0") {
    licenseLink = `(https://opensource.org/licenses/MPL-2.0)`
  };
  if (license === "Apache 2.0 License") {
    licenseLink = `(https://opensource.org/licenses/Apache-2.0)`
    };
  if (license === "GNU General Public License 3.0") {
    licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
    };
  return licenseLink
  };


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(license)}
  ## Table of Contents:
  1. [Description](#Description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [Questions](#Questions)
  
## Description
${data.description} 
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## License
${renderLicenseLink(license)}
## Questions
${data.username}
${data.email}
`;
}

module.exports = generateMarkdown;
