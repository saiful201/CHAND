const fs = require("fs");
module.exports.config = {
	name: "den",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "den",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("den")==0 || (event.body.indexOf("Den")==0)) {
		var msg = {
				body: "GO HOME",
				attachment: fs.createReadStream(__dirname + `/noprefix/đen.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}