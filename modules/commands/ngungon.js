module.exports.config = {
name: "ngủ ngon",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "what about the belt?",
	commandCategory: "No command marks needed",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sleep tight")==0 || (event.body.indexOf("Sleep tight")==0) || (event.body.indexOf("Nn")==0) || (event.body.indexOf("nn")==0)) {
		var msg = {
				body: "I love you tight sleep",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngungon.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}