module.exports.config = {
name: "ngực",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "chill",
	commandCategory: "No command marks needed",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("chest")==0 || (event.body.indexOf("Chest")==0)) {
		var msg = {
				body: "I signed fan's chest 2k3",
				attachment: fs.createReadStream(__dirname + `/noprefix/kinguc.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}