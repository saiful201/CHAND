const fs = require("fs");
module.exports.config = {
	name: "pakyu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Izuri Chun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pakyu")==0 || (event.body.indexOf("fuckyou")==0 || (event.body.indexOf("fck u")==0 || (event.body.indexOf("fuck you")==0)))) {
		var msg = {
				body: "Ama namin sumasalangit Ka Sambahin ang ngalan Mo Mapasaamin ang kaharian Mo Sundin ang loob Mo Dito sa lupa para nang sa langit Bigyan Mo kami Ng aming kakanin sa araw-araw At patawarin Mo kami Sa aming mga sala Para nang pagpapatawad namin Sa nagkakasala sa amin At huwag Mo kaming ipahintulot sa tukso At iadya Mo kami sa lahat ng masama"
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
