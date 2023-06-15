// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const {generateMarkdown} = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your project\'s title',
        name: 'title',
        default: 'Project'
    },
    {
        message: 'Please enter your project\'s description.',
        name: 'description',
        default: 'Cool project does many things!'
    },
    {
        message: 'Please enter any installation instructions for your project.',
        name: 'installation',
        default: 'Download files'
    },
    {
        message: 'Please enter any usage information for your project.',
        name: 'usage',
        default: 'Click links and enter input when asked'
    },
    {
        message: 'Please enter any guidelines for future contributors.',
        name: 'contributing',
        default: 'Open new repository and give credit to initial project'
    },
    {
        message: 'Please enter information regarding tests for your project.',
        name: 'tests',
        default: 'Tested with Mocha and VSCode debugger'
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
        default: 'UserName'
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
    // create conditional to check if output folder exists and creates an output directory if it does not exist
    if (!fs.existsSync('output')) {
        fs.mkdirSync('output');
    };
    // runs prompt module then writes README inside output directory using data from answers
    prompt(questions).then((answers) => writeToFile('output/README.md', answers));   
}

// // Function call to initialize app
init();
