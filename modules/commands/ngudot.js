const fs = require("fs");
module.exports.config = {
name: "stupid3",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD",
	description: "stupid",
	commandCategory: "No command marks needed",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("stupid3")==0 || (event.body.indexOf("Stupid")==0)) {
		var msg = {
				body: "Correct! this guy is so stupid",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngudot.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}