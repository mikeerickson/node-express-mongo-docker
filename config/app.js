require('dotenv').load();

module.exports = {
	DB_CONNECTION: `mongodb://mongo:27017/${process.env.DB_NAME}`,
};
