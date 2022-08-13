const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown')


const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please describe specific installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please describe specific usage information.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please choose a license.',
        name: 'license',
        choices: [
            'MIT',
            'GPLv2',
            'Apache 2.0',
            'Unlicense',
            'None'
        ]
    },
    {
        type: 'input',
        message: 'Please describe specific contribution guidelines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please describe specific testing instructions.',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'github_username',
    },
    {
        type: 'input',
        message: 'Please enter the email address you want to display for contact information.',
        name: 'email',
    },
]



inquirer
    .prompt(questions)
    .then((data) => {
        fs.writeFile('./sample_readme/README.md', md(data), (err) =>
            err ? console.error(err) : console.log('Success!'))
    })