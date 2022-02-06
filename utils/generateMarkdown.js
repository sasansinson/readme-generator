// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  const licenseType = data.license;
  let licenseString = "";
  if (licenseType === "MIT License") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "Mozilla Public License 2.0") {
    licenseString = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  };
  if (licenseType === "Apache License 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    };
  if (licenseType === "GNU GPLv3") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  return licenseString
  };



// Function that returns the license link
function renderLicenseLink(data) {
  const link = data.license;
  let licenseLink = "";
  if (link === "MIT License") {
    licenseLink = `[MIT License](https://opensource.org/licenses/MIT)`
  };
  if (link === "Mozilla Public License 2.0") {
    licenseLink = `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`
  };
  if (link === "Apache License 2.0") {
    licenseLink = `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`
    };
  if (link === "GNU GPLv3") {
    licenseLink = `[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)`
    };
  return licenseLink
  };


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}
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
${renderLicenseLink(data)}
## Questions
You can contact me at my Email: ${data.email}\n
Link to my Github profile: [${data.username}](https://github.com/sasansinson)`;
}

module.exports = generateMarkdown;
