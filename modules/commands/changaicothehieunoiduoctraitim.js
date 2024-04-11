const fs = require("fs");
module.exports.config = {
	name: "khoc",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "No one can understand the heart",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("khoc")==0 || (event.body.indexOf("Khoc")==0)) {
		var msg = {
				body: "I'm fine 😔",
				attachment: fs.createReadStream(__dirname + `/noprefix/khoc.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}