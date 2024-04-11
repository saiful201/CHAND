const fs = require("fs");
module.exports.config = {
	name: "break",
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
	if (event.body.indexOf("Break")==0 || (event.body.indexOf("break")==0 || (event.body.indexOf("Iniwan")==0 || (event.body.indexOf("iniwan")==0)))) {
		var msg = {
				body: "😢😭",
				attachment: fs.createReadStream(__dirname + `/noprefix/iniwan.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }