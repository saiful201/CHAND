const fs = require("fs");
module.exports.config = {
name: "training",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD",
	description: "training",
	commandCategory: "No command marks needed",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("training")==0 || (event.body.indexOf("Huan")==0)) {
		var msg = {
				body: "Listen to the teacher",
				attachment: fs.createReadStream(__dirname + `/noprefix/3 Thứ Đang Hot Trên MXH .mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}