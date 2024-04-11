const fs = require("fs");
module.exports.config = {
	name: "aftie",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Choru tiktokers", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("aftie")==0 || (event.body.indexOf("Gn")==0 || (event.body.indexOf("Aftie")==0 || (event.body.indexOf("Afternoon")==0)))) {
		var msg = {
				body: "Góód afténóón po ano gawa",
				attachment: fs.createReadStream(__dirname + `/noprefix/good-afternoon.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌆", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }