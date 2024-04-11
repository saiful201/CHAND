const fs = require("fs");
module.exports.config = {
	name: "good-night",
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
	if (event.body.indexOf("Sleep")==0 || (event.body.indexOf("Nyt")==0 || (event.body.indexOf("tulog")==0 || (event.body.indexOf("Tulog")==0)))) {
		var msg = {
				body: "Góód Nīght po sleép well",
				attachment: fs.createReadStream(__dirname + `/noprefix/good-night.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌃", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }