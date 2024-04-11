const fs = require("fs");
module.exports.config = {
	name: "Love bots",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Love bots",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lav bots")==0 || (event.body.indexOf("Lav bots")==0)) {
		var msg = {
				body: "U wait, bot loves you so much😼❤️",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}