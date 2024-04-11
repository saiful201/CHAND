const fs = require("fs");
module.exports.config = {
name: "nực cười",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "Dogma",
	commandCategory: "No command marks needed",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("you are so funny")==0 || (event.body.indexOf("ridiculous")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/cache/nuccuoi.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}