module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100053153614547") {
    var aid = ["100053153614547"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["anong kailangan mo sa pogi kong admin?", "Tag Admin again, I'll punch you", "wag mong istorbohin admin ko","tumatae sya","tulog admin yung ko"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }