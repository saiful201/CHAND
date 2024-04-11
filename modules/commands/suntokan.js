const fs = require("fs");
module.exports.config = {
	name: "suntokan ",
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
	if (event.body.indexOf("Sige mention mo susuntukin na kita.")==0 || (event.body.indexOf("Suntukan")==0 || (event.body.indexOf("Sige isa pa")==0 || (event.body.indexOf("Blehh")==0)))) {
		var msg = {
    				body: "Tara suntukan basta walang iyakan lmào kid l bozo "
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
