module.exports = {
	root: false,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'comma-dangle': 'off',
	},
	parserOptions: {
		parser: 'typescript-eslint-parser',
	},
};
