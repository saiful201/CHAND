const fs = require("fs");
module.exports.config = {
	name: "còn cái nịt",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "what about the belt?",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("what about the belt?")==0 || (event.body.indexOf("What about the corset?")==0)) {
		var msg = {
				body: "Oh, there's a belt. Still the right belt",
				attachment: fs.createReadStream(__dirname + `/noprefix/concainit.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}