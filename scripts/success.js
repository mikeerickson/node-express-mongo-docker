const chalk = require('chalk');

let cmd = process.argv[2] !== undefined ? process.argv[2] + ':' : '';

console.log('');
console.log(`${chalk.bgGreen.black.bold(' DONE ')} ${cmd} No Errors Found`);
