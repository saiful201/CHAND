const fs = require("fs");
module.exports.config = {
	name: "sofia",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Micheal", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hello")==0 || (event.body.indexOf("hello")==0 || (event.body.indexOf("HELLO")==0 || (event.body.indexOf("Hillo")==0)))) {
		var msg = {
				body: "ganda mopo",
				attachment: fs.createReadStream(__dirname + `/noprefix/lofia.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
