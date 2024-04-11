const fs = require("fs");
module.exports.config = {
	name: "Mawmaw",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "Choru Tikokers", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chords")==0 || (event.body.indexOf("/CHORDS FLY ME TO THE MOON")==0 || (event.body.indexOf("/chords Fly me to the moon")==0 || (event.body.indexOf("/Chords Fly me to the moon")==0)))) {
		var msg = {
				body: "const fs = require("fs");
module.exports.config = {
	name: "Mawmaw",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "Choru Tikokers", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fly")==0 || (event.body.indexOf("moon")==0 || (event.body.indexOf("Fly")==0 || (event.body.indexOf("chords")==0)))) {
		var msg = {
				body: "Fly.....[Am7].....me to the moon.....[Dm7].....Let me play.....[G7].....among the stars .....[Cmaj7].....[F].....Let me see what spring.....[Dm7].....is like On a Jupiter.....[E7].....and Mars.....[Am7].....In other.....[Dm7].....words, [G7].....holding hand.....[C].....In other.....[Dm7]words,.....[G7].....baby kiss me.....[C].....[E].....Fill.....[Am7]......my heart with song [Dm7] And let me sing....[G7].....for ever more.....[Cmaj7].....[F].....You are all I long.....[Dm7].....for All I worship [E]and adore.....[Am7].....[A7].....In other.....[Dm7].....words,....[G7].....please be true.....[C].....[A7].....In other.....[Dm7].....words,.....[G7]I love you.....[Cmaj7]""
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
