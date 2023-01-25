// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Running the Tests](#running-the-tests)
* [Using the Repo](#using-the-repo)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Installation
To install dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Running the Tests
To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`

## Using the Repo
${data.using}

## Contributing
${data.contributing}

## License
This project is licensed under the ${data.license} license.

## Questions
If you have any questions, please reach out to the author at ${data.email}. You can also find the author on GitHub at [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;


