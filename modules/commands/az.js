module.exports.config = {
	name: "quotes",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "random quotes",
	commandCategory: "quotes",
	cooldowns: 1
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api-quotes.joshuacarrera1.repl.co/quotes`);
var quotes = res.data.quotes;
return api.sendMessage(`${quotes}`, event.threadID, event.messageID)
}