const fs = require("fs");
module.exports.config = {
	name: "mura ni niana guarrero",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "choru tiktokers", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Guerrero")==0 || (event.body.indexOf("Niana")==0 || (event.body.indexOf("Mura")==0 || (event.body.indexOf("Mura")==0)))) {
		var msg = {
				body: "😡🤬😠",
				attachment: fs.createReadStream(__dirname + `/noprefix/NianaGuerrero.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
