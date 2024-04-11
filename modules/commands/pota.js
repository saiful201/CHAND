const fs = require("fs");
module.exports.config = {
name: "pota",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Azuria Sky",
	description: "pota",
	commandCategory: "No prefix",
	usages: "pota",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pota")==0 || (event.body.indexOf("amp")==0)) {
		var msg = {
				attachment: fs.createReadStream(__dirname + `/noprefix/pota.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
