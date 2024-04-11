const fs = require("fs");
module.exports.config = {
	name: "bruh",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Choru tiktokers",
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Broh")==0 || (event.body.indexOf("broh")==0 || (event.body.indexOf("Bruh")==0 || (event.body.indexOf("bruh")==0)))) {
		var msg = {
				body: "brûh.mp3.",
				attachment: fs.createReadStream(__dirname + `/noprefix/bruh.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😲", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }