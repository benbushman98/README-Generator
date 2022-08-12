function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `MIT \n This project is licensed under the `
      break;
    case 'GPLv2':
      console.log('GPLv2!');
      break;
    case 'Apache 2.0':
      console.log('Apache 2.0');
      break;
    case 'The Unlicense':
      console.log('Unlicense!');
      break;
    default:
      console.log('Default!');
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
- [Tests](#test)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
Please visit me at https://github.com/${data.github_username}. 
If you have any additional questions or concerns, feel free to contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
