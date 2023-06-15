// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const {generateMarkdown, renderLicenseBadge ,renderLicenseSection} = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your project\'s title',
        name: 'title',
        default: 'project 1'
    },
    {
        message: 'Please enter your project\'s description.',
        name: 'description',
        default: 'cool project very cool'
    },
    {
        message: 'Please enter any installation instructions for your project.',
        name: 'installation',
        default: 'install it'
    },
    {
        message: 'Please enter any usage information for your project.',
        name: 'usage',
        default: 'click the links'
    },
    {
        message: 'Please enter any guidelines for future contributors.',
        name: 'contributing',
        default: 'must request check from owner before merging branches'
    },
    {
        message: 'Please enter information regarding tests for your project.',
        name: 'tests',
        default: 'use mocha'
    },
    {
        type: 'list',
        message: 'Choose the corresponding license for your project:',
        choices: ['MIT', 'Mozilla', 'ODbL', 'Apache', 'CC0', 'IBM', 'No License' ],
        name: 'license',
        default: 'MIT'
    },
    {
        message: 'Please enter your GitHub username.',
        name: 'gitHub',
        default: 'ChesneyJulian'
    },
    {
        message: 'Please enter your preferred email address.',
        name: 'email',
        default: 'user.email@yahoo.com'
    }
];



// // TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFileSync(fileName, generateMarkdown(answers));
}


// // TODO: Create a function to initialize app
function init() {
    prompt(questions).then((answers) => writeToFile('new-README.md', answers));   
}

// // Function call to initialize app
init();
