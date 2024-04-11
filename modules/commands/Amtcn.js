const fs = require("fs");
module.exports.config = {
	name: "amtcn",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Love you only to see you",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("amtcn")==0 || (event.body.indexOf("Amtcn")==0)) {
		var msg = {
				body: "Our eyes touch 😍😍😍 ",
				attachment: fs.createReadStream(__dirname + `/noprefix/amtcn.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}