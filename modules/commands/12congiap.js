const fs = require("fs");
module.exports.config = {
	name: "12 Zodiacs",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "12 Zodiacs",
    cooldowns: 5, 
};

module.exports.handleReply = async function({ api, event, handleReply }) {
	switch(event.body){
		case "1":
			api.sendMessage({
				body: "1. Rat ( Rat 🐁 )\n\n(23-1 hours): When the mouse is active.\n\nRat is the zodiac sign that represents a smooth, good start. People born in the year of the Rat often have the characteristics of being very attractive to the opposite sex, being a charming and agile person at work. Old people always carry in themselves a positive and creative energy. When facing difficulties, always calmly solve problems.\n\nAccording to feng shui, the Rat is considered to bring prosperity to the owner. In the 12 animal models, when displaying the Rat mascot, the owner can be helped to solve the situation, bringing prosperity to the family.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12congiap/tí.gif`)
			}, event.threadID, event.messageID);
			break;
		case "2":
			api.sendMessage({
				body: "\n2. Ox ( Tru 🐃 )\n\n(1-3 hours): When the buffalo is munching, preparing to plow.\n\nThe buffalo symbolizes diligence and patience. This year has steady but slow progress and an enduring strength; People born in the year of the Ox often have the right personality to be a scientist.\n\nThe buffalo is a symbol of spring and agriculture because it is associated with the plow and likes to drown in the mud. People with this age are usually calm and very steadfast but very stubborn.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12congiap/suu.gif`)
			}, event.threadID, event.messageID);
			break;
		case "3":
			api.sendMessage({
				body: "3. Tiger ( Tiger 🐅 )\n\n(3-5 hours): When the tiger is at its most aggressive.\n\nTiger people are often very angry, lack of stance but they can be very soft and turn the fish around. adapted to the situation. The tiger is the king of the jungle, is often nocturnal and conjures up images of darkness and storms. Tiger Hour starts from 3am to 5am when the tiger returns to its den after prowling in the night.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12congiap/dan.gif`)
			}, event.threadID, event.messageID); 
			break;
		case "4":
			api.sendMessage({
				body: "4. Rabbit ( Cat 🐈 )\n\n(5-7 hours): Vietnam calls cats, but China calls them rabbits, when the moon (jewel rabbit) is still shining.\n\nCats represent people who talk. gentle, talented, ambitious and will succeed in education. They are very in conflict with the people born in the year of the Rat. People born in the year of the Rabbit have a flexible spirit, patience and know how to wait for an opportunity before taking action.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12congiap/mao.gif`)
			}, event.threadID, event.messageID); 
			break;
		case "5":
			api.sendMessage({
				body: "5. Dragon ( Dragon 🐉 )\n\n(7-9 hours): When the dragon flocks to gather rain (Quan Long is dancing).\n\nThe dragon in the myth of the East is the Yang nature of the universe, a symbol of power. royal rights. Accordingly, dragons are present everywhere, in the water, on the ground and in the air. The dragon is a symbol of water and a favorable sign for agriculture. People born in the year of the Dragon are very honest and aggressive, but very short-tempered and stubborn. They are symbols of power, wealth, prosperity and royalty.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12congiap/thin.gif`)
			}, event.threadID, event.messageID); 
			break;
		case "6":
			api.sendMessage({
				body: "6. Snake ( Snake 🐍 )\n\n(9-11 hours): When snakes do not harm people.\n\nSnake people speak little but are very wise. They are suitable for wet areas. The snake symbolizes the eternal evolution of age and succession, the decay and succession of generations of mankind. People born in the year of the snake are very calm, gentle, deep and understanding, but sometimes get angry. They are very determined and persistent.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12congiap/tị.gif`)
			}, event.threadID, event.messageID); 
			break;
		case "7":
			api.sendMessage({
				body: "7. Horse (Horse 🦓 )\n\n(11-13 hours): Horses have a high positivity.\n\nThe people born in the year of the Horse are usually soft-spoken, comfortable and generous. As a result, they are easily liked by many people, but they rarely listen to advice. People of this age usually have a very hot temper. The horse's running speed makes people think of the sun shining on the earth every day. In mythology, the sun is said to be associated with raging horses. This age is often said to have purity, nobility and wisdom. People of this age are often respected due to their intelligence, strength, and affection.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12congiap/ngo.gif`)
			}, event.threadID, event.messageID); 
			break;
		case "8":
			api.sendMessage({
				body: "8.Smell (Goat 🐐 )\n\n(13-15 hours): When the goat eats grass, it does not affect the regrowth of plants.\n\nThe people born in the year of the Goat are usually very calm but timid, very modest but not have a stance. They are very clumsy, so they can't be good sales people, but they are very sympathetic to people in need and often help people. They often have the advantage because of their natural kindness and shyness.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12congiap/mui.gif`)
			}, event.threadID, event.messageID); 
			break;
		case "9":
			api.sendMessage({
				body: "9. Than ( Monkey 🐒 )\n\n(15-17 hours): When monkeys like to howl. Monkey people are usually a talented person with a capricious personality. They are very talented and skillful in money transactions. People of this age are usually very cheerful, skillful, curious and creative, but they talk too much so they are easily looked down on and despised by others. Their weakness lies in their mood swings and inconsistencies.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12congiap/than.gif`)
			}, event.threadID, event.messageID); 
			break;
		case "10":
			api.sendMessage({
				body: "10. Rooster (Chicken 🐓)\n\n(17-19 hours): When the rooster begins to enter the coop.\n\nPeople born in the year of the Rooster have many outstanding traits, such as honesty, brightness, love of communication and ambitious. Most of them are born pretty or handsome and like to dress up. In daily life, they rarely depend on others. However, they can be enthusiastic about something quickly, but quickly become impatient. Therefore, they need to have enough faith and patience to stick to one thing.\n\nThe Year of the Rooster represents a period of industrious work as the chickens have to be busy from morning to night. Its crest is a sign of extreme intelligence and a learned mind. People born in the year of the Rooster are considered deep thinkers. At the same time, the Chicken is considered a protection against fire. People born in the year of the Rooster often make a living through small businesses, working diligently like a chicken digging in the ground to find worms.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12congiap/dau.gif`)
			}, event.threadID, event.messageID); 
			break;
		case "11":
			api.sendMessage({
				body: "11. Dog ( Dog 🐕 )\n\n(19-21 hours): The time when the dog has to stay awake to look after the house.\n\nThe Year of the Dog indicates a prosperous future. Around the world, dogs are used to guard homes against intruders. Pairs of fighting dogs are often placed on either side of the village gate for protection. Year of the Dog is believed to be a very safe year.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12congiap/tuat.gif`)
			}, event.threadID, event.messageID); 
			break;
		case "12":
			api.sendMessage({
				body: "12. Pig ( Pig 🐖 )\n\n(21-23 hours): When the pig sleeps the most.\n\nThe pig symbolizes wealth because wild boar often make burrows in the forests. People born in the year of the Pig are chivalrous, kind and brave but often stubborn, short-tempered but diligent and obedient..", 
				attachment: fs.createReadStream(__dirname + `/noprefix/12congiap/hoi.gif`)
			}, event.threadID, event.messageID); 
			break;
		default:
			api.sendMessage({
				body: "Please A Choose a Number 1-12 Uwu💖", 
				
			}, event.threadID, event.messageID); 
			return
	}
	 api.unsendMessage(handleReply.messageID);
}

module.exports.handleEvent = function({ api, event}) {
	if (event.body.indexOf("12 Zodiacs")==0 || (event.body.indexOf("12 Zodiacs")==0)) {
		api.sendMessage({
			body: "==== 12 zodiac animals in folklore ====\n 1. Rat 🐁\n 2. Ox 🐃\n 3. Tiger 🐅\n 4. Rabbit 🐈\n 5. Dragon 🐉\n 6. Snake 🐍\n 7. Horse 🦓\n 8. Smell 🐐\n 9. Body 🐒\n10. Rooster 🐓\n11. Dog 🐕\n12. Pig \n\nReply message by number to see more about each animal <3",
			attachment: fs.createReadStream(__dirname + `/cache/12congiap.jpg`)
		}, event.threadID, (error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID}), event.messageID);
	}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}
