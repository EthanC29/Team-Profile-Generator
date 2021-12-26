const fs = require('fs');
const Profiles = require('./lib/Profile');
const generateHTML = require ("./utils/generateHTML.js")

new Profiles().initializeProfile();

function writeToFile(data) {
    fs.writeFile('./dist/index.html', generateHTML(data), err => {
        if (err) throw err;
        console.info('Team Profile complete!')
    });
}

writeToFile(teamProfile);