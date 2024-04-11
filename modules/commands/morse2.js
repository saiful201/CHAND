module.exports.config = {
	name: "morsetext",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "morse code to text",
  usages: "[morse code]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`http://www.morsecode-api.de/decode?string=${juswa}`);
var plaintext = res.data.plaintext;
return api.sendMessage(`${plaintext}`, event.threadID, event.messageID)
}