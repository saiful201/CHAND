const fs = require("fs");
module.exports.config = {
	name: "geyan finger",
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
	if (event.body.indexOf("Gods")==0 || (event.body.indexOf("Fingers")==0 || (event.body.indexOf("Geyan")==0 || (event.body.indexOf("geyan")==0)))) {
		var msg = {
				body: "Gèyàn fìngèrs gøds"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
