module.exports.config = {
	name: "binary",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "text to binary codes",
	commandCategory: "code",
	cooldowns: 1
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/encode?text=${juswa}`);
var a = res.data.binary;
return api.sendMessage(`${a}`, event.threadID, event.messageID)
}