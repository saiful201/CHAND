const fs = require("fs");
module.exports.config = {
	name: "Russia dance erzar",
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
	if (event.body.indexOf("Russia")==0 || (event.body.indexOf("russia")==0 || (event.body.indexOf("@Erzar Saraga Jimlani ")==0 || (event.body.indexOf("Erzar")==0)))) {
		var msg = {
				body: "👢🇷🇺🕺",
				attachment: fs.createReadStream(__dirname + `/noprefix/RussiaErzar.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
