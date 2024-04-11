const fs = require("fs");
module.exports.config = {
	name: "hahaha",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Izuri Chun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("HAHAHA")==0 || (event.body.indexOf("hahaha")==0 || (event.body.indexOf("haha")==0 || (event.body.indexOf("HAHA")==0)))) {
		var msg = {
				body: "Happy ka 😎💅"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
