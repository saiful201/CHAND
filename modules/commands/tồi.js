const fs = require("fs");
module.exports.config = {
name: "Baad",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dũngkon",
	description: "Bastard",
	commandCategory: "noprefix",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("baad")==0 || (event.body.indexOf("Baad")==0) || (event.body.indexOf("Toy")==0) || (event.body.indexOf("tồy")==0)) {
		var msg = {
			body:`According to my master`,
				attachment: fs.createReadStream(__dirname + `/noprefix/toi.png`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
