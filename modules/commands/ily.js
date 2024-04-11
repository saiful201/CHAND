const fs = require("fs");
module.exports.config = {
	name: "ily",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Choru tiktokers",//fixing ily
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I love you")==0 || (event.body.indexOf("Mwa")==0 || (event.body.indexOf("mwa")==0 || (event.body.indexOf("iloveyou")==0)))) {
		var msg = {
				body: "í lôve yoú po mwà",
				attachment: fs.createReadStream(__dirname + `/noprefix/i-love-you-ily.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }