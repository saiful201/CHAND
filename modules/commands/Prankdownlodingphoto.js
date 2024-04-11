const fs = require("fs");
module.exports.config = {
	name: "Mawmaw",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "Choru Tikokers", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("downloading photo")==0 || (event.body.indexOf("downloading video")==0 || (event.body.indexOf("Downloading photo")==0 || (event.body.indexOf("Downloading video")==0)))) {
		var msg = {
				body: "HAHAHAHAHA AMP YAN SENENT MO"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
