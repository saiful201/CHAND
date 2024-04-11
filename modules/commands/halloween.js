module.exports.config = {
	name: "halloween",
	version: "1.0.9",
	hasPermssion: 0,
	credits: "CatalizCS modded CHORU",//modded by choru tiktokers",
	description: "Halloween",
	commandCategory: "Nagbibilang ng mga Araw",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("Octerber 31, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`👻🎃Natitira ang oras hanggang sa Halloween🎃👻\n» ${days} biot ${hours} takotin ${minutes} scared ${seconds} iyakin «`, event.threadID, event.messageID);
}