const Profiles = require('./lib/Profile');
const { generateIndex } = require('./utils/generateHTML.js')
const { writeFile, copyFile } = require

const team = new Profiles().initializeProfile();

const content = generateIndex(team.employees)

writeFile(content);

copyFile();
