module.exports = {
	root: false,
	env: {
		node: true,
	},
	parserOptions: {
		ecmaVersion: 6,
	},
	extends: [],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'comma-dangle': 'off',
	},
};
