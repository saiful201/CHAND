const fs = require("fs");
module.exports.config = {
	name: "baby sabog",
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
	if (event.body.indexOf("Baby")==0 || (event.body.indexOf("baby,")==0 || (event.body.indexOf("I'm here baby, ah ah!")==0 || (event.body.indexOf("Mwa baby")==0)))) {
		var msg = {
    				body: "corni mo"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
