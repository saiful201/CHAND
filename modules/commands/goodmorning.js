const fs = require("fs");
module.exports.config = {
	name: "good-morning",
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
	if (event.body.indexOf("goodmoring")==0 || (event.body.indexOf("maganda araw")==0 || (event.body.indexOf("morning")==0 || (event.body.indexOf("Morning")==0)))) {
		var msg = {
				body: "Góód Môrnïng Hêllô kamüsta aràw mó",
				attachment: fs.createReadStream(__dirname + `/noprefix/Good-Morning-Gif-Images.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }