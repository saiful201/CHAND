const fs = require("fs");
module.exports.config = {
	name: "jepoy mura",
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
	if (event.body.indexOf("Bulok")==0 || (event.body.indexOf("Tangina")==0 || (event.body.indexOf("Jepoy")==0 || (event.body.indexOf("jepoy")==0)))) {
		var msg = {
				body: "lôl.",
				attachment: fs.createReadStream(__dirname + `/noprefix/jepoy.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤬", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }