var fs = require("fs");
module.exports.config = {
	name: "thathinh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Long LTD",
	description: "The sweetest whispers from Admin deeptry <3 hihi",
	commandCategory: "group",
	usages: "[flirt with girls, not gays]",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	var sentenses = [
		{
			body: "The sweetest thing",
			attachment: fs.createReadStream("./modules/commands/voice/dieungotngao.mp3")
		},
		{
			body: "Baby, the cold wind is near",
			attachment: fs.createReadStream("./modules/commands/voice/giolanh.mp3")
		},
		{
			body: "I'm a girl with a red heart",
			attachment: fs.createReadStream("./modules/commands/voice/emlacogai.mp3")
		},
		{
			body: "You are the most peaceful place",
			attachment: fs.createReadStream("./modules/commands/voice/binhyen.mp3")
		},
		{
			body: "The Sunflower is a symbol of the Sun",
			attachment: fs.createReadStream("./modules/commands/voice/hoahuongduong.mp3")
		},
		{
			body: "Math is 2",
			attachment: fs.createReadStream("./modules/commands/voice/hoctoanhinh.mp3")
		},
		{
			body: "How do I walk?",
			attachment: fs.createReadStream("./modules/commands/voice/hoiemdidung.mp3")
		},
		{
			body: "Kim is a must have thread",
			attachment: fs.createReadStream("./modules/commands/voice/kimvoichi.mp3")
		},
		{
			body: "You are a brave man ~",
			attachment: fs.createReadStream("./modules/commands/voice/naucom.mp3")
		},
		{
			body: "What's wrong with you",
			attachment: fs.createReadStream("./modules/commands/voice/nangdacomu.mp3")
		},
		{
			body: "Raise fish and grow more vegetables",
			attachment: fs.createReadStream("./modules/commands/voice/nhangian.mp3")
		},
		{
			body: "Why are you so pretty?",
			attachment: fs.createReadStream("./modules/commands/voice/nhinem.mp3")
		},
		{
			body: "Good wine forgets sadness",
			attachment: fs.createReadStream("./modules/commands/voice/ruoungon.mp3")
		},
		{
			body: "1 round the world I met you",
			attachment: fs.createReadStream("./modules/commands/voice/traidathinhtron.mp3")
		},

	];
	api.sendMessage(sentenses[Math.floor(Math.random() * parseInt(sentenses.length))], event.threadID, event.messageID);
}