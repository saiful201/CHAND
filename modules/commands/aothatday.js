const fs = require("fs");
module.exports.config = {
	name: "Virtual",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Virtual cunt but virtual virtual all day virtual virtual ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("virtual")==0 || (event.body.indexOf("Virtual")==0)) {
		var msg = {
				body: "Virtual Djtconmemay your mother virtual all day 🙃",
				attachment: fs.createReadStream(__dirname + `/noprefix/aothatday.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}