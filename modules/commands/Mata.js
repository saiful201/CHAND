const fs = require("fs");
module.exports.config = {
	name: "Mata",
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
	if (event.body.indexOf("mata")==0 || (event.body.indexOf("Mata")==0 || (event.body.indexOf("Mgatanga")==0 || (event.body.indexOf("mgatanga")==0)))) {
		var msg = {
				body: "tànga.",
				attachment: fs.createReadStream(__dirname + `/noprefix/mgatanga.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😲", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }