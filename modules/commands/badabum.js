module.exports.config = {
name: "badabum",
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
	if (event.body.indexOf("badabum")==0 || (event.body.indexOf("Badabum")==0)) {
		var msg = {
				body: "You make my heart beat badabum",
				attachment: fs.createReadStream(__dirname + `/noprefix/badabum.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}