// create object to store links for license badges and webpages
const licenseLinks = {
  MIT: ['MIT-yellow.svg', 'https://opensource.org/licenses/MIT'],
  Mozilla: ['MPL_2.0-brightgreen.svg', 'https://opensource.org/licenses/MPL-2.0'],
  ODbL: ['ODbL-brightgreen.svg', 'https://opendatacommons.org/licenses/odbl/']
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// LINKS ARE INCLUDED AFTER BADGE TO MAKE THEM CLICKABLE LINKS
function renderLicenseBadge(license) {
  // const mitBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  // const mozillaBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  // const openDataBaseBadge = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
 if (license) {
  return `[![License](https://img.shields.io/badge/License-${licenseLinks[license][0]})]`
 } else {
  return ` `;
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[${license} URL](${licenseLinks[license][1]})`
  } else {
    return ` `;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (license) {
  return `## License
  This project uses the ${license} license. Click the link to view the license's webpage.`
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
  
  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}

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
  renderLicenseSection,
  renderLicenseBadge
};
