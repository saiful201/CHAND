module.exports.config = {
    name: "chuyentien",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Dũng UwU",
    description: "Transfer your own money to someone",
    commandCategory: "Economy",
    usages: "pay @tag coins",
    cooldowns: 5,
     };

module.exports.run = async ({ event, api, Currencies, args }) => {
let { threadID, messageID, senderID } = event;
const mention = Object.keys(event.mentions)[0];
let name = event.mentions[mention].split(" ").length
if(!mention) return api.sendMessage('Please tag the person you want to transfer the coins to!',threadID,messageID);
else {
	if(!isNaN(args[0+ name])) {
		const coins = parseInt(args[0+ name]);
		let balance = (await Currencies.getData(senderID)).money;
        if (coins <= 0) return api.sendMessage('The number of coins you want to transfer is not valid',threadID,messageID);
		if (coins > balance) return api.sendMessage('The number of coins you want to transfer is larger than the number of coins you currently have!',threadID,messageID);
		else {
        return api.sendMessage({ body: 'Transferred to ' + event.mentions[mention].replace(/@/g, "") + ` ${args[0+ name]} coins`}, threadID, async () => {
            await Currencies.increaseMoney(mention, coins);
                  Currencies.decreaseMoney(senderID, coins)
            }, messageID);
		}
	} else return api.sendMessage('Please enter the number of coins you want to transfer',threadID,messageID);
}
}