require('dotenv').load();
const APP_PORT = process.env.APP_PORT || 4242;
const config = require('./config/app');

const express = require('express');
const mongodb = require('mongodb');
const chalk = require('chalk');

const routes = require('./src/routes');
const app = express();

const client = mongodb.MongoClient;
client.connect(
	config.DB_CONNECTION,
	(err, db) => {
		if (err) {
			console.log(chalk.red('Unable to connect to database'));
		} else {
			console.log(chalk.green('Database Connected'));
		}
	}
);

app.get('/', (req, res) => {
	let result = { status: 200, msg: 'Node Express Server Running' };
	res.json(result);
});

app.listen(APP_PORT, () => {
	console.log(chalk.cyan(`Server Running, listening on port ${APP_PORT}`));
});
