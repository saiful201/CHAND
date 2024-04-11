module.exports.config = {
	name: "pig",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "hoàng",
	description: "To use is to know",
	commandCategory: "Gifts",
	usages: "pig",
	cooldowns: 3,
	
};
module.exports.run = async function({ api, event }) {
	 return api.setTitle(`You guys here are as stupid as a pig🐷`, event.threadID, event.messageID)
 

}