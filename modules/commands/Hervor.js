const fs = require("fs");
module.exports.config = {
	name: "jzro hervor",
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
	if (event.body.indexOf("jzro")==0 || (event.body.indexOf("Jzro")==0 || (event.body.indexOf("Hervor")==0 || (event.body.indexOf("hervor")==0)))) {
		var msg = {
				body: "ah si pogi Hèrvor kilala kuyon haha"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
