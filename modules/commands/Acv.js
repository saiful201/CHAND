const fs = require("fs");
module.exports.config = {
	name: "acv",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "I've been trying",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("acv")==0 || (event.body.indexOf("Acv")==0)) {
		var msg = {
				body: "I used to try to cultivate our love 😔",
				attachment: fs.createReadStream(__dirname + `/noprefix/acv.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}