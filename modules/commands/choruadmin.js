const fs = require("fs");
module.exports.config = {
	name: "Choruadmin",
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
	if (event.body.indexOf("@Choru Tiktokers")==0 || (event.body.indexOf("Choro")==0 || (event.body.indexOf("Churo")==0 || (event.body.indexOf("Chorus")==0)))) {
		var msg = {
    				body: "Ano kaylangan mo sa admin pm monalang siya kung gusto mo mag usap kayo"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
