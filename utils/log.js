const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[❕WARNING]') + data);
			break;
		case "error":
			console.log(chalk.red('[❕ERROR]') + data);
			break;
		default:
			console.log(chalk.magenta(`${option}`) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('$-[MR CHAND]-$') + data);
			break;
		case "error":
			console.log(chalk.red('×-[MR CHAND]-×') + data);
			break;
		default:
			console.log(chalk.green(`✓-[MR CHAND]-✓`) + data);
			break;
	}
}