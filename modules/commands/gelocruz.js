const fs = require("fs");
module.exports.config = {
	name: "gelo cruz",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Choru Tiktokers", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Inamo")==0 || (event.body.indexOf("Putanginamo")==0 || (event.body.indexOf("Potang")==0 || (event.body.indexOf("Ina")==0)))) {
		var msg = {
				body: "🤬🤬🤬",
				attachment: fs.createReadStream(__dirname + `/noprefix/putanginamo.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
