const fs = require("fs");
module.exports.config = {
    name: "chan",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "huyhoàng - Fixed by LTD", 
    description: "no prefix",
    commandCategory: "No need for command marks",
    usages: "chan",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("chan")==0 || (event.body.indexOf("Chan")==0)) {
        var msg = {
                body: "I'm not sure I'm happy when I smile :(",
                attachment: fs.createReadStream(__dirname + `/noprefix/chan.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}