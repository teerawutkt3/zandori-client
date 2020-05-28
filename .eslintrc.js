module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	"rules": {
		"semi": [
			"error",
			"never"
		],
		"indent": ["error", "tab"],
		"vue/html-closing-bracket-spacing": [
			"error",
			{
				"selfClosingTag": "never"
			}
		]
	}
}
