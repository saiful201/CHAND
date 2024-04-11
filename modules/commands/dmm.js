const fs = require("fs");
module.exports.config = {
	name: "Dmmm",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "fuck your mother",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("dmm")==0 || (event.body.indexOf("Dmm")==0)) {
		var msg = {
				body: "Fuck your mother ",
				attachment: fs.createReadStream(__dirname + `/noprefix/ditmemay.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}