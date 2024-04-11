module.exports.config = {
	name: "Huyen",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random picture of the most beautiful boy in Vietnam :))",
	commandCategory: "random-img",
	usages: "Huyen",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://khanhhuyen.ocvat2810.repl.co/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/huyền.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/huyền.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/huyền.${ext}`)).on("close", callback);
			})
}