const fs = require("fs");
module.exports.config = {
	name: "sabog report!",
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
	if (event.body.indexOf("barangay")==0 || (event.body.indexOf("report")==0 || (event.body.indexOf("Mistake")==0 || (event.body.indexOf("Report")==0)))) {
		var msg = {
    				body: "rèpórt amp bobo kanaba ahh baka ma suntok kita ehh"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
