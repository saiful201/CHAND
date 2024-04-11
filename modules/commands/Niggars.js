const fs = require("fs");
module.exports.config = {
	name: "RACIST mass report yan!!",
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
	if (event.body.indexOf("nigga")==0 || (event.body.indexOf("What's up nigga")==0 || (event.body.indexOf("jdkwnigga")==0 || (event.body.indexOf("Niggaballs")==0)))) {
		var msg = {
    				body: "Tangina yan report koto si gago bawal niggar dito"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
