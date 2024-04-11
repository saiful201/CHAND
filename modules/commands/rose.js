const fs = require("fs");
module.exports.config = {
name: "rose",
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
	if (event.body.indexOf("rose")==0 || (event.body.indexOf("training")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/cache/rose.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}