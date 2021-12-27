const inquirer = require('inquirer');
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const { generateIndex } = require('../utils/generateHTML.js')
const { writeFile, copyFile } = require('../utils/generate-site')

class Employee {
    constructor() {
        this.employees = [];
        this.addNext;
        this.counter = 0;
        this.employeeString;
    }

    initializeProfile() {

        const engineerQuestion = () => {
            return inquirer
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
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter an ID');
                            return false;
                        }
                    }
                },
                {
                    type: 'input', 
                    name: 'email', 
                    message: "What is this person's email?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter an email');
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
                    message: 'Would you like to add another employee?',
                    choices: [
                        'Engineer',
                        'Intern',
                        'No More'
                    ]
                }
            ])
            .then(answers => {
                this.employees.push(new Engineer(answers.employeeName, answers.idNumber, answers.email, answers.username));
                this.employeeString += this.employees[this.counter].getProfileHTML();
                this.counter++;

                this.addNext = answers.askAddNext;

                if (this.addNext == 'No More') {
                    this.generateHTMLString(this.employeeString)
                };
                loopQuestions()
            })
        }
    
        const internQuestion = () => {
            return inquirer
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
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter an ID');
                            return false;
                        }
                    }
                },
                {
                    type: 'input', 
                    name: 'email', 
                    message: "What is this person's email?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter an email');
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
                    message: 'Would you like to add another employee?',
                    choices: [
                        'Engineer',
                        'Intern',
                        'No More'
                    ]
                }
            ])
            .then(answers => {
                this.employees.push(new Intern(answers.employeeName, answers.idNumber, answers.email, answers.school));
                this.employeeString += this.employees[this.counter].getProfileHTML();
                this.counter++;

                this.addNext = answers.askAddNext;

                if (this.addNext == 'No More') {
                    this.generateHTMLString(this.employeeString)
                };
                loopQuestions()
            })
                
        }

        const managerQuestion = () => {
            return inquirer
            .prompt([
                {
                    type: 'input', 
                    name: 'employeeName', 
                    message: "What is the manager's name?",
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
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter an ID');
                            return false;
                        }
                    }
                },
                {
                    type: 'input', 
                    name: 'email', 
                    message: "What is this person's email?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter an email');
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
                    message: 'Would you like to add another employee?',
                    choices: [
                        'Engineer',
                        'Intern',
                        'No More'
                    ]
                }
            ])
            .then(answers => {
                this.employees.push(new Manager(answers.employeeName, answers.idNumber, answers.email, answers.office));
                this.employeeString += this.employees[this.counter].getProfileHTML();
                this.counter++;

                this.addNext = answers.askAddNext;

                if (this.addNext == 'No More') {
                    this.generateHTMLString(this.employeeString)
                };
                loopQuestions()
            })
            
        }
    
        const loopQuestions = () => {
            if (this.addNext === 'Engineer') {
                engineerQuestion();
            } else if (this.addNext === 'Intern') {
                internQuestion();
            }
        }
        
        managerQuestion()
    }

    generateHTMLString(data) {
        const tempContent = generateIndex(data);
        const content = tempContent.replace('undefined','');
        this.genarateIndexHtml(content);
    }

    genarateIndexHtml(content) {
        writeFile(content);
        copyFile();
    }
}

module.exports = Employee;