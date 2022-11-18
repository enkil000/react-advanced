const eslintConfig = {

	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
		"no-var": 2,
		"no-alert": 2,
		"no-unused-vars": 0,
		"no-mixed-spaces-and-tabs": 0,
	}
}

module.exports = eslintConfig

