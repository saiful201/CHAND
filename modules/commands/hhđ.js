const fs = require("fs");
module.exports.config = {
	name: "hhđ",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MinVu", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "hhd",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hhđ")==0 || (event.body.indexOf("hhđ")==0)) {
		var msg = {
				body: "Because my heart loves you too much, loves you too much, misses you, I wait for you to come back!!💞",
				attachment: fs.createReadStream(__dirname + `/noprefix/hhđ.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}