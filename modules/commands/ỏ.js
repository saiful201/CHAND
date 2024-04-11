const fs = require("fs");
module.exports.config = {
name: "ỏ",
	version: "1.0.0",
	hasPermssion: 0,
	description: "The weather is so beautiful today!!",
	commandCategory: "No command marks needed",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ỏ.mp4")) request("https://tinyurl.com/yjor5nwg").pipe(fs.createWriteStream(dirMaterial + "ỏ.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ỏ")==0 || (event.body.indexOf("ỏ")==0)){
	  var msg = {
				body: "The weather is so beautiful today..!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/ỏ.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}