const fs = require("fs");
module.exports.config = {
name: "Countryside",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "hoàng",
	description: "yamete",
	commandCategory: "Countryside",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Countryside")==0 || (event.body.indexOf("Quê")==0)) {
		var msg = {
				attachment: fs.createReadStream(__dirname + `/noprefix/que.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
