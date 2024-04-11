module.exports.config = {
	name: "howtouse",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Kanzu",
	description: "*",
	commandCategory: "MODULE (COMMAND)",
	usages: "howtouse option input",
	cooldowns: 5,
	info: [
		{
			key: 'option => add',
			prompt: 'More work/contributions',
			type: 'string',
			example: 'make bot better'
		},
		{
			key: 'option => list',
			prompt: 'View full list of work/contributions',
			type: 'string'
		},
		{
			key: 'option => delete',
			prompt: 'Delete specified work/contribution based on line number, only admin can use',
			type: 'number',
			example: "1"
		}
	]
};

module.exports.onLoad = function () {
	const fs = require("fs-extra");

	if (!fs.existsSync(__dirname + "/cache/howtouse.json")) {
		const howtouse = [];
		fs.writeFileSync(__dirname + "/cache/howtouse.json", JSON.stringify(howtouse));
	}
}

module.exports.run = function({ api, event, args, permssion, utils }) {
	const fs = require("fs-extra");
	const content = args.slice(1, args.length);
	const dirFile = __dirname + "/cache/howtouse.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

	switch (args[0]) {
		case "add": {
			if (permssion !== 2) return api.sendMessage("You are not authorized to use add, please use /howtouse list !", event.threadID, event.messageID);
			const howtouse = `[ Instruct ] ${content.join(" ")}`
			getData.push(howtouse);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			return api.sendMessage(`Added Success Guide!`, event.threadID, event.messageID);
		}
		case "list":
		case "all": {
			if (getData.length == 0) return api.sendMessage(`There are currently no guides to display!`, event.threadID, event.messageID);
			var workList = "";
			getData.map(item => workList += `\n[⚜️] ${item}`);
			return api.sendMessage(`[ = [ How To Use List ] = ] : \n${workList}`, event.threadID, event.messageID);
		}
		case "baicao": {
		return api.sendMessage(`How to Play Scratch Cards :\n First we need to create a table for scratch cards by \" /baicao create \"\n Then we invite everyone to play by \'/baicao join\' [ you also need to click ! ]\n Then ask everyone to message the bot with any word so that the bot can reply!\n Next, the table owner needs \'/baicao test\' for the bot to reply, if 1 2 people participate If you don't receive the message, it means their acc is under 18+ , failed to play !\n Those who can't play need \"/baicao leave\" to leave then ask Nguyen Thai Hao !\n After everything If the player has finished preparing, the game owner presses \"/baicao start\" to start!\n Then the game owner just needs to text \'Deal to bot\' without the \'/\' * note please write same as above otherwise bot won't post to !\n Then everyone go to bot's chat section, bot will send post to , the highest total of 3 cards is 9 if you are satisfied, please message \'Ready\ ' *write the same as above !*\n If you think it's too low, you can change cards based on luck* with 2 turns, and change by texting \'change cards\'* please write like * bot will send you any 3 cards with different numbers\n If you don't want to change , want to change but run out of turn , find the number is high enough , generally yes or no the way, you need to press \'Ready\' *Please write correctly\n all members message \'Ready\', the bot will announce the results immediately!\n no instructions !`,event.threadID, event.messageID);
		}
		case "kiemtien": {
		return api.sendMessage(`Ways to Make Money With BOT :\n[=] Method 1: /work to work\n[=] Method 2: /daily to receive daily money\n[=] Method 3: When the ad organizes an event\n [=] Method 4: Fishing, one of the simplest ways\n[=] Method 5: Let T.Vy ask for :>>\n[=] Method 6: Gambling, betting /slot [ amount ]\n I'm out of stock - I'll eat if I make it :<`, event.threadID, event.messageID);
		}
		case "giveaway": {
		return api.sendMessage("How to use /giveaway :\nfirst need to create giveaway = way: /giveaway create\n then join by dropping icon in bot message or\n/giveaway join [ giveaway id number ]\nwait for participants and then click \n/giveaway roll - to run the number \n then bot will announce the winner !", event.threadID, event.messageID);	
		}
		case "veso": {
			return api.sendMessage("how to use /veso :\n first press /veso , then choose 4 random numbers from 1 - 35\n wait 10s and there will be 4 random numbers \n then follow the instructions of the bot\n Solve Bonus :\n Hit all 4 numbers : 1,000,000\n Win 3 : 750,000\n Win 2 : 500,000\n Win 1 250,000", event.threadID, event.messageID);	
			}
		case "del": 
		case "delete": {
			if (permssion !== 2) return api.sendMessage("You are not authorized to use delete!", event.threadID, event.messageID);
			if (getData.length == 0) return api.sendMessage(`There are currently no instructions on how to delete!`, event.threadID, event.messageID);
			if (content.length == 0) return api.sendMessage(`You need to specify the item to delete`, event.threadID, event.messageID);
			if (isNaN(content)) return api.sendMessage(`You need to specify the item to delete`, event.threadID, event.messageID);
			getData.splice((parseInt(content) - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			return api.sendMessage(`Successfully deleted item with id: ${content}`, event.threadID, event.messageID);
		}
		default:
			api.sendMessage("Click /howtouse list <3", event.threadID,event.messageID);
		break;
	}
}
