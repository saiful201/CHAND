const fs = require("fs");
module.exports.config = {
	name: "bold pa",
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
	if (event.body.indexOf("pinayflix")==0 || (event.body.indexOf("Pinayflix")==0 || (event.body.indexOf("Bold")==0 || (event.body.indexOf("bold")==0)))) {
		var msg = {
				body: "bóld pamore",
				attachment: fs.createReadStream(__dirname + `/noprefix/boldpa.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧐", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }