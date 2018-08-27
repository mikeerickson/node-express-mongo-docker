const express = require('express');
const mongodb = require('mongodb');
const chalk = require('chalk');

const app = express();

const config = require('./db');
const APP_PORT = 4242;
const client = mongodb.MongoClient;
client.connect(
	config.DB,
	(err, db) => {
		if (err) {
			console.log('Unable to connect to database');
		}
 else {
			console.log('Database Connected');
		}
	}
);

app.get('/', (req, res) => {
	let result = {hello: 'World'};
	res.json(result);
});

app.listen(APP_PORT, () => {
	console.log(`Server Running, listening on port ${APP_PORT}`);
});
