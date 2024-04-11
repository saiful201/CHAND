const fs = require("fs");
module.exports.config = {
name: "Các bạn bị làm sao ý",
	version: "1.0.1",
	description: "What's wrong with you guys?",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "lamsao.mp4")) request("https://tinyurl.com/yfsrslyq ").pipe(fs.createWriteStream(dirMaterial + "lamsao.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("What's wrong with you guys?")==0) || (event.body.indexOf("how")==0) || (event.body.indexOf("Làm sao")==0)) {
		var msg = {
				body: "What's wrong with you guys?!",
		attachment: fs.createReadStream(__dirname + `/noprefix/lamsao.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }