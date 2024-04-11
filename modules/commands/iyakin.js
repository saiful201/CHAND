const fs = require("fs");
module.exports.config = {
	name: "iyak",
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
	if (event.body.indexOf("cry")==0 || (event.body.indexOf("Cry")==0 || (event.body.indexOf("Iyak")==0 || (event.body.indexOf("iyak")==0)))) {
		var msg = {
				body: "hahàha.",
				attachment: fs.createReadStream(__dirname + `/noprefix/wagkaiiyak.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😐", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }