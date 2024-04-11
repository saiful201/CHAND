module.exports.config = {
  name: "quockhanh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Yuuki",
  description: "Countdown to the National Day of the Socialist Republic of Vietnam",
  commandCategory: "Timer",
  cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("September 2, 2021 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「Time left for the National Day of the Socialist Republic of Vietnam」\n» ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds «`, event.threadID, event.messageID);
}