module.exports.config = {
	name: "japanname",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "random text",
	commandCategory: "Random Text",
	usages: "",
	cooldowns: 5,
	dependencies: {
		"axios":""}
	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];

const res = await axios.get(`https://manhict.tech/rnamejap`);
var names = res.data.names
return api.sendMessage(`${names}`, event.threadID, event.messageID)
}