// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project title?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Project Title!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a short description of your project!');
                return false;
            }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['Apache 2.0','Boost','MIT', 'GPL v3','None'],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please choose one!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter usuage description!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this app?', 
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub link to your project!');
                return false;
            }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            console.log(err);
            return;
        }
        else {
            console.log('Readme file has been successfully created.');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        const context = generateMarkdown(data);
        writeToFile("READme.md", context);
    })
}

// Function call to initialize app
init();
