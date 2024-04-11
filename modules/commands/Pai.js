const fs = require("fs");
module.exports.config = {
name: "pai",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Sleep",
	commandCategory: "No command marks needed",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngủ")==0 || (event.body.indexOf("Ngủ")==0) || (event.body.indexOf("sleep")==0) || (event.body.indexOf("Sleep")==0) || (event.body.indexOf("Đi ngủ")==0) || (event.body.indexOf("đi ngủ")==0)) {
		var msg = {
				body: "Pssst!!S.L.E.E.P WELL.\nI miss you so much!\nSee you tomorrow morning 🦄💜",
				attachment: fs.createReadStream(__dirname + `/noprefix/sleep.gif`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}