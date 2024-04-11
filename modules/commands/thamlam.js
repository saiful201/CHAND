const fs = require("fs");
module.exports.config = {
name: "covetous",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "covetous",
	commandCategory: "No command marks needed",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("covetous")==0 || (event.body.indexOf("Tham lam")==0)) {
		var msg = {
				body: "Correct! it's greedy",
				attachment: fs.createReadStream(__dirname + `/noprefix/thamlam.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}