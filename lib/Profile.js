const inquirer = require('inquirer');
const Manager = require('../lib/Manager')

class Profiles {
    constructor() {
        this.profileNumber = 0;
        this.employees = [];
    }

    initializeProfile() {
        inquirer
            .prompt([{
                type: 'input', 
                name: 'name', 
                message: "What is this person's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name');
                        return false;
                    }
                }
            },
            {
                type: 'input', 
                name: 'idNumber', 
                message: "What is this person's employee ID number?",
                validate: idInput => {
                    if (/^\d+$/.test(idInput)) {
                        return true;
                    } else {
                        console.log('Please enter a valid ID');
                        return false;
                    }
                }
            },
            {
                type: 'input', 
                name: 'email', 
                message: "What is this person's email?",
                validate: emailInput => {
                    if (emailInput.includes('@')) {
                        return true;
                    } else {
                        console.log('Please enter a valid email');
                        return false;
                    }
                }
            },
            {
                type: 'input', 
                name: 'username', 
                message: "What is this person's GitHub username?",
                validate: usernameInput => {
                    if (usernameInput) {
                        return true;
                    } else {
                        console.log('Please enter a username');
                        return false;
                    }
                }
            }])
            .then(({ name }, { idNumber }, { email }, { username }) => {
                this.employees.push(new Manager(name, idNumber, email, username));
            })
            .then({
                type: 'list',
                name: 'addAnother',
                message: 'Would you like to add another employee?'
                choices: [
                    'Yes',
                    'No'
                ]
            })
    }
}

module.exports = Profiles;