module.exports.config = {
	name: "brainly",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Joshua Sy",
	description: "brainly",
  usages: "[search]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api.xteam.xyz/brainly?soal=${juswa}&APIKEY=bb87827d6c4b905e`);
var answer = res.data.jawaban;
return api.sendMessage(`${answer}`, event.threadID, event.messageID)
}