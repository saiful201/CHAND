const fs = require("fs");
module.exports.config = {
name: "You don't have to cheat",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "Dogma",
	commandCategory: "No command marks needed",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("You don't have to cheat")==0 || (event.body.indexOf("just a little bit")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/cache/thoithoithoi.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}