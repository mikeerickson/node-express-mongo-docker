const chalk = require('chalk');

const args = process.argv[2] !== undefined ? process.argv[2] : '';

console.log('');
console.log(`${chalk.bgGreen.black.bold(' DONE ')} ${chalk.green.bold(args)}`);
