const licenseArr = [];
const licenseSec = '';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const mitBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  const mozillaBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  const openDataBaseBadge = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
  if (license === 'the MIT License') {
    licenseArr.push(mitBadge);
  } else if (license === 'Mozilla Public License 2.0') {
    licenseArr.push(mozillaBadge);
  } else if (license === 'Open Database License (ODbL)') {
    licenseArr.push(openDataBaseBadge);
  } else {
    return '';
  }
  console.log(licenseArr);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    licenseArr.push(
    `## License
    
    Click the badge to view information on this license.
    ${license}
    ${licenseArr[0]}`);
    console.log(licenseArr);
  } else {
    console.log('');
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${licenseArr[1]}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Visit my GitHub for more insight:  [${data.gitHub}'s GitHub](https://github.com/${data.gitHub}/)
  
  Please email me at [${data.email}](${data.email}) for further questions.`;
}

module.exports = {
  generateMarkdown,
  renderLicenseSection,
  renderLicenseBadge
};
