const fs = require("fs");
module.exports.config = {
	name: "krazyrapidboots",
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
	if (event.body.indexOf("Crazyrapidboots")==0 || (event.body.indexOf("krazyrapidboots")==0 || (event.body.indexOf("Crazy")==0 || (event.body.indexOf("Krazy")==0)))) {
		var msg = {
				body: "🤬🤬🤬",
				attachment: fs.createReadStream(__dirname + `/noprefix/krazyrapidboots.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
