const fs = require("fs");
module.exports.config = {
name: "Simp",
	version: "1.0.1",
	description: "simp",
	commandCategory: "No command marks needed",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "anhthichem.mp4")) request("https://tinyurl.com/yft84wvr ").pipe(fs.createWriteStream(dirMaterial + "anhthichem.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("Doraemon")==0) || (event.body.indexOf("I like you")==0) || (event.body.indexOf("I like you")==0)) {
		var msg = {
				body: "I Like You So Much :3",
		attachment: fs.createReadStream(__dirname + `/noprefix/anhthichem.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}