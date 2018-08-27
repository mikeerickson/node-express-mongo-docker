const chalk = require('chalk');

const args = process.argv[2] !== undefined ? process.argv[2] : '';

console.log('');
console.log(`${chalk.bgRed.white.bold(' ERROR ')} ${chalk.red.bold(args)}`);
