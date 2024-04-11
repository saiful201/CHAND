const fs = require("fs");
module.exports.config = {
	name: "Sonic",
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
	if (event.body.indexOf("Sonic hacker")==0 || (event.body.indexOf("Sonic exe")==0 || (event.body.indexOf("sonic")==0 || (event.body.indexOf("Sonic")==0)))) {
		var msg = {
				body: "it's the best watch cartoons all the time"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
