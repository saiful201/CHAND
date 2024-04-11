const fs = require("fs");
module.exports.config = {
	name: "jakol time",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Choru tiktokers", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Jakol")==0 || (event.body.indexOf("Jabol")==0 || (event.body.indexOf("Oras")==0 || (event.body.indexOf("Time")==0)))) {
		var msg = {
				body: "🥸🥒🍆",
				attachment: fs.createReadStream(__dirname + `/noprefix/jakoltime.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
