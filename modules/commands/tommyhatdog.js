const fs = require("fs");
module.exports.config = {
	name: "hatdog",
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
	if (event.body.indexOf("hatdog")==0 || (event.body.indexOf("Hatdog")==0 || (event.body.indexOf("Tommy")==0 || (event.body.indexOf("tommy")==0)))) {
		var msg = {
				body: "🥪🌭🍔",
				attachment: fs.createReadStream(__dirname + `/noprefix/tummy.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
