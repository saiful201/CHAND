const fs = require("fs");
module.exports.config = {
name: "I get it",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "huy hoàng và Hân - Fixed by LTD",
    description: "I'm stupid",
    commandCategory: "No command marks needed",
    usages: "no need prefix just chat :)",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("I get it")==0 || (event.body.indexOf("I get it")==0)) {
        var msg = {
                body: "Only sincerity is enough...",
                attachment: fs.createReadStream(__dirname + `/noprefix/toihieu.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}