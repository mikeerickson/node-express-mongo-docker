const chalk = require('chalk');

const cmd = process.argv[2] !== undefined ? process.argv[2] + ':' : '';
const msg = chalk.green.bold(`${cmd} No Errors Found`);

console.log('');
console.log(`${chalk.bgGreen.black.bold(' DONE ')} ${msg}`);
