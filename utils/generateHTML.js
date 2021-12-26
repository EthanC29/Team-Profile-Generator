const fs = require('fs');
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Profiles = require('./lib/Profile');

const team = new Profiles().initializeProfile();

const generateIndex = employeeArray => {
    return`
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>

        </main>
    </body>
    `
}







module.exports = { generateIndex };