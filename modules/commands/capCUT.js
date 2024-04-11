const fs = require("fs");
module.exports.config = {
name: "fuck off",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Cút",
	commandCategory: "No command marks needed",
	usages: "cache",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Fuck off")==0 || (event.body.indexOf("gliding")==0)) {
		var msg = {
				
				attachment: fs.createReadStream(__dirname + `/cache/FB_IMG_16254178631406373.jpg`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
