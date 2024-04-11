const fs = require("fs");
module.exports.config = {
	name: "anglakas",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "choru tiktokers", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lakas")==0 || (event.body.indexOf("pwet")==0 || (event.body.indexOf("Angas")==0 || (event.body.indexOf("Pwet")==0)))) {
		var msg = {
				body: "👁️👄👁️",
				attachment: fs.createReadStream(__dirname + `/noprefix/anglakas.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
