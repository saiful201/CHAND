module.exports.config = {
	name: "tds",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "HungCho",
	description: "",
	commandCategory: "economy",
	usages: "Check your exchangedoisub coins ?",
	cooldowns: 0,
};

module.exports.run = async function({ api, event, args, Currencies, utils,Users,Threads }) {
           let axios = require('axios')
           let { threadID, senderID, messageID } = event;
          
           if(args.length == 0) api.sendMessage("Missing token tds ?",threadID,messageID)
           else{
           let res = await axios.get(encodeURI(`https://traodoisub.com/api/?fields=profile&access_token=${args[0]}`));
           console.log(res.data)
           var i = res.data;
           var ii = i.data;
           var msg = `🎄account name: ${ii.user}\n🐧Coins: ${ii.xu}\r\n[!] Data is taken from awardoisub !`
           api.sendMessage(msg,threadID,messageID)
          }
       }