const inquirer = require('inquirer');
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

class Profiles {
    constructor(name = '') {
        this.name = name
        this.profileNumber = 0;
        this.employees = [];
        this.addNext;
    }

    initializeProfile() {
        const managerQuestion = () => {
            inquirer
                .prompt([
                    {
                        type: 'input', 
                        name: 'employeeName', 
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
                        name: 'office', 
                        message: "What is this person's office number?",
                        validate: usernameInput => {
                            if (usernameInput) {
                                return true;
                            } else {
                                console.log('Please enter an office number');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'list',
                        name: 'askAddNext',
                        message: 'Would you like to add another employee? If so, what position?',
                        choice: [
                            'Engineer',
                            'Intern',
                            'No More'
                        ]
                    }
                ])
                .then(({ employeeName }, { idNumber }, { email }, { office }, { askAddNext }) => {
                    this.employees.push(new Manager(employeeName, idNumber, email, office));
                    this.addNext = askAddNext;
                })
        }

        const engineerQuestion = () => {
            inquirer
                .prompt([
                    {
                        type: 'input', 
                        name: 'employeeName', 
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
                    },
                    {
                        type: 'list',
                        name: 'askAddNext',
                        message: 'Would you like to add another employee? If so, what position?',
                        choice: [
                            'Engineer',
                            'Intern',
                            'No More'
                        ]
                    }
                ])
                .then(({ employeeName }, { idNumber }, { email }, { username }, { askAddNext }) => {
                    this.employees.push(new Engineer(employeeName, idNumber, email, username));
                    this.addNext = askAddNext;
                })
        }

        const internQuestion = () => {
            inquirer
                .prompt([
                    {
                        type: 'input', 
                        name: 'employeeName', 
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
                        name: 'school', 
                        message: "What is this person's school?",
                        validate: usernameInput => {
                            if (usernameInput) {
                                return true;
                            } else {
                                console.log('Please enter a school');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'list',
                        name: 'askAddNext',
                        message: 'Would you like to add another employee? If so, what position?',
                        choice: [
                            'Engineer',
                            'Intern',
                            'No More'
                        ]
                    }
                ])
                .then(({ employeeName }, { idNumber }, { email }, { school }, { askAddNext }) => {
                    this.employees.push(new Intern(employeeName, idNumber, email, school));
                    this.addNext = askAddNext;
                })
        }
        
        if (this.profileNumber === 0) {
            new Manager().managerQuestion();
            this.profileNumber++;
        } else {
            if (this.addNext === 'Engineer') {
                engineerQuestion();
            } else if (this.addNext === 'Intern') {
                internQuestion();
            }
            this.profileNumber++;
        }

    }
}

module.exports = Profiles;