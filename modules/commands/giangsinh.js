module.exports.config = {
	name: "Xmas",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Countdown to Christmas",
        commandCategory: "game",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("December 25, 2021 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「 Let's countdown to Christmas🎅🎄 」\n» ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds «`, event.threadID, event.messageID);
}