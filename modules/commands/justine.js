const fs = require("fs");
module.exports.config = {
	name: "Justine rhaine ventura",
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
	if (event.body.indexOf("Ventura")==0 || (event.body.indexOf("Justine")==0 || (event.body.indexOf("justine")==0 || (event.body.indexOf("rhaine")==0)))) {
		var msg = {
				body: "ah si pogi jûstine kilala kuyon haha"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
