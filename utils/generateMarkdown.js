function renderLicenseBadge(license) {
  switch (license) {
    case'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'GPLv2':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    case 'None':
      return ""
  }
}

function renderLicenseSection(license) {
  switch (license) {
    case'MIT':
      return `This project is licensed under the MIT license.\nPlease visit to get more information: https://opensource.org/licenses/MIT`;
    case 'GPLv2':
      return `This project is licensed under the GPLv2 license.\nPlease visit to get more information: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
    case 'Apache 2.0':
      return `This project is licensed under the Apache 2.0 license.\nPlease visit to get more information: https://www.apache.org/licenses/LICENSE-2.0`;
    case 'Unlicense':
      return `This project uses The Unlicense template.\nPlease visit to get more information: https://unlicense.org/`;
    case 'None':
      return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

---

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#test)
- [Questions](#questions)

---

## Installation
${data.installation}

---

## Usage
${data.usage}

---

## License
${renderLicenseSection(data.license)}

---

## Contributing
${data.contribution}

---

## Tests
${data.test}

---

## Questions
Please visit me at https://github.com/${data.github_username}. 
If you have any additional questions or concerns, feel free to contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
