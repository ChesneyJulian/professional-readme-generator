// create object to store links for license badges and webpages
const licenseLinks = {
  MIT: ['MIT-yellow.svg', 'https://opensource.org/licenses/MIT'],
  Mozilla: ['MPL_2.0-brightgreen.svg', 'https://opensource.org/licenses/MPL-2.0'],
  ODbL: ['ODbL-brightgreen.svg', 'https://opendatacommons.org/licenses/odbl/'],
  Apache: ['Apache_2.0-blue.svg', 'https://opensource.org/licenses/Apache-2.0'],
  CC0: ['CC0_1.0-lightgrey.svg', 'http://creativecommons.org/publicdomain/zero/1.0/'],
  IBM: ['IPL_1.0-blue.svg', 'https://opensource.org/licenses/IPL-1.0']

}
// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // conditional so if license is not equal to 'No License', the correct license's badge will be displayed
 if (license !== 'No License') {
  return `![License](https://img.shields.io/badge/License-${licenseLinks[license][0]})`
 } else {
  // If there is no license, return an empty string
  return '';
 }
};

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  // conditional so if license is selected (not 'No License'), the correct link will be returned for screen display
  if (license !== 'No License') {
    return `[${license} URL](${licenseLinks[license][1]})`
  } else {
    // If there is no license, return an empty string
    return '';
  }
};

// create function to add navigation link to table of contents if license is selected and not 'No License'
function renderLicenseNavigation(license) {
  if (license !== 'No License') {
    return `- [License](#license)`
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  // conditional so if license is selected, a section for license will appear in the readme
 if (license !== 'No License') {
  return `## License
  This project is covered under the ${license} license. Click the link to view the license's webpage.`
 } else {
  // If there is no license, return an empty string
  return '';
 }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // insert variable data using calls from inquirer data
  return `# ${data.title}
  ## Description  

  ${renderLicenseBadge(data.license)}

  ${data.description}            
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseNavigation(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}
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
};
