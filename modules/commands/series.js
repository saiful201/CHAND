const fs = require("fs");
module.exports.config = {
name: "series",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Series",
	commandCategory: "No command marks needed",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("series")==0 || (event.body.indexOf("Series")==0)) {
		var msg = {
				body: "It's Late But Why - The Boss Touches Mex",
				attachment: fs.createReadStream(__dirname + `/noprefix/181218123_592948831677973_3460554070234388531_n.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}