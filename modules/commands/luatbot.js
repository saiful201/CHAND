const fs = require("fs");
module.exports.config = {
	name: "Law of bots",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Love bots",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Law of bots")==0 || (event.body.indexOf("luật bot")==0)) {
		var msg = {
				body: "⚡️INVITE BOTS TO THE GROUP /rankup 2 TIMES and /resend 2 TIMES TO OFF LEVEL NOTICE !!!!!\n⚡️⚡️⚡️++++ CHAIN ​​BOT + SPAM BOT + KICK BOT = BAN BOX ++++⚡️⚡️ ⚡️\n\n⚡️Due to the ignorance of the group members or because the admins are not conscious, no one can control it so that the bot gets blocked with messages or can fly the bot it's the nth time.-.) or because some stupid people who don't know how to use bots say they are retarded and say bots are bad (if it's bad, kick it out and find another bot and use it._.) .\n⚡️Monday⚡️\n⚡️Add bot to the box without asking for permission 🤔 and then destroy the bot, kick the bot to stop loz \n⚡️Tuesday⚡️\n⚡️Many components have 1,2 commands, 5s apart I can't stand spamming once the phone can't stand it._.\n⚡️Wednesday⚡️\n⚡️There are some components that tell me to use vippro no 1 ip12prx samsung abcxyz or something and then tell bots to text and send messages to lag the whole device, I think I should go get a new or new machine ̣̂p cmn now only use 1 bot, many bots lead to a loose box and affect bots that detect 2 bots or bla bla then out + ban.\n⚡️Saturday⚡️\n⚡️And last time I said who can use bots then don't use it, don't force it, don't add it to the box and criticize all kinds of bad bots and then swear at war with bots ._.\n⚡️Sunday⚡️\n⚡️Waiting for more updates 🌚🌚🌚",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}