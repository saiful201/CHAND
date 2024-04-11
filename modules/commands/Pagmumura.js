const fs = require("fs");
module.exports.config = {
	name: "Pag mumura ",
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
	if (event.body.indexOf("Tangina")==0 || (event.body.indexOf("Gago")==0 || (event.body.indexOf("Yawa")==0 || (event.body.indexOf("Bugo")==0)))) {
		var msg = {
    				body: "Has been report acc"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
