  module.exports.config = {
	name: "color",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "hoàng",
	description: "Talk less, use it, don't go away, dad, don't need me to use it",
	commandCategory: "news",
	usages: "I can't find it anywhere to see",
	cooldowns: 0,
   dependencies: {}
};
module.exports.run = async function ({event, api, args, Currencies, __GLOBAL }) {
	             var data = await Currencies.getData(event.senderID);
  var money = data.money
  const moneyUser = (await Currencies.getData(event.senderID)).money;
  if (100 > moneyUser) return api.sendMessage("don't have enough money lol!", event.threadID, event.messageID);
	            var color = args.join("") 
				var check = (num) => (num == 0) ? '💙' : (num % 2 == 0 && num % 6 != 0 && num % 10 != 0) ? '♥️' : (num % 3 == 0 && num % 6 != 0) ? '💚' : (num % 5 == 0 && num % 10 != 0) ? '💛' : (num % 10 == 0) ? '💜' : '🖤️';
				let random = Math.floor(Math.random() * 50);
				if (color == "e" || color == "blue") color = 0;
				else if (color == "r" || color == "red") color = 1;
				else if (color == "g" || color == "green") color = 2;
				else if (color == "y" || color == "yellow") color = 3;
				else if (color == "v" || color == "violet") color = 4;
				else if (color == "b" || color == "black") color = 5;
				else return api.sendMessage("You have not entered betting information!, black [100] , red [200] , green [70] , yellow [50] , violet [150], blue [180],", event.threadID, event.messageID);
				
				if (color == 0 && check(random) == '💙') api.sendMessage(`You chose the color 💙, you won and got + 180$\nYour current amount is: ${moneyUser + 180}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + 180}),event.messageID);
				else if (color == 1 && check(random) == '♥️') api.sendMessage(`You chose the color ♥️, you won and got + 200$\nYour current amount is: ${moneyUser + 200}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + 200}),event.messageID);
				else if (color == 2 && check(random) == '💚') api.sendMessage(`You chose the color 💚, you won and got + 70$\nYour current amount is: ${moneyUser + 70}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + 70}),event.messageID);
				else if (color == 3 && check(random) == '💛') api.sendMessage(`You chose the color 💛, you won and got + 50$\nYour current amount is: ${moneyUser + 50}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + 50}),event.messageID);
				else if (color == 4 && check(random) == '💜') api.sendMessage(`You chose the color 💜, you won and got + 150$\nYour current amount is: ${moneyUser + 150}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + 150}),event.messageID);
				else if (color == 5 && check(random) == '🖤️') api.sendMessage(`You picked the color ️🖤️, you won and got + 100$\nYour current amount is: ${moneyUser + 100}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + 100}),event.messageID);
				else api.sendMessage(`Color ${check(random)}\nYou have gone to the dike :'(\nand 100$ is deducted\nYour remaining amount is: ${moneyUser - 100}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money - 100}),event.messageID);
			}
			
		