const fs = require("fs");
module.exports.config = {
    name: "chúa hề",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "huyhoàng - Fixed by LTD", 
    description: "no prefix",
    commandCategory: "No command marks needed",
    usages: "Chúa hề",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("clown lord")==0 || (event.body.indexOf("Chúa hề")==0)) {
        var msg = {
                body: "Joker number 1",
                attachment: fs.createReadStream(__dirname + `/noprefix/he.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}