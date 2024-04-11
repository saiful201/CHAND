const fs = require("fs");
module.exports.config = {
	name: "asr",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Anh Sai Rồi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("asr")==0 || (event.body.indexOf("Asr")==0)) {
		var msg = {
				body: "I'm Wrong 😻 Excuse me ?",
				attachment: fs.createReadStream(__dirname + `/noprefix/asr.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}