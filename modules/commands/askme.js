module.exports.config = {
	name: "askme",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "HelyT",
	description: "Help like Spermbot :3",
	commandCategory: "group",
	usages: "[command]",
	cooldowns: 1,
};
module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("askme") != 0) return;

	const splitBody = body.slice(body.indexOf("askme")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Using: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Belonging to the group: ${command.config.commandCategory}\n❯ Waiting time: ${command.config.cooldowns} second(s)\n❯ Power: ${((command.config.hasPermssion == 0) ? "User" : (command.config.hasPermssion == 1) ? "Admin" : "Bot operator" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["The owner of the bot is FlyingTuna","This bot is smarter than you","did you know","I can't understand girls","this bot helps you in learning?"," spambot I'll ban you from bot users","don't make me mad!","what you're doing is pointless","you've pissed me off😡","I love you so much","you do you love me?", "what is not known, just know" "If the mouse is sick, why does the mouse die?" "Nosebleed but why is the blood red?" , "is this just a fake spermbot product?", "I'm Long's little lover", "October 18 is FlyingTuna's birthday", "This bot looks like Spermbot but it's actually just a Spermbot. mod again?","This is a more complete version of FlyingTuna Bot V1.","This is not a C3C or KB2A bot.","177013 is a great number.","This is a useless command" ,"177013 is a great number","There were 600+ JAV codes in the first version of SpermBot", "If you meet a person named FT stay away That's as much as possible. Otherwise, that person's family tree will haunt you for life, your children and grandchildren will be haunted by the name FT", "This is a bot that writes its own code", "143 is a beautiful number for love", "do you love me?","you are so stupid"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = `[Do you know?]: ${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Usage: ${prefix}${command.config.name} ${( command.config.usages) ? command.config.usages : ""}\n❯ Group: ${command.config.commandCategory}\n❯ Timeout: ${command.config.cooldowns} seconds(s)\ n❯ Permissions: ${((command.config.hasPermssion == 0) ? "User" : (command.config.hasPermssion == 1) ? "Administrator" : "Bot operator" )}\ n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};