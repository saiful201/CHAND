module.exports.config = {
    name: "sugar2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "hungdz30cm",
    description: "The pictures .... quality\nEvery time you see it you have to pay 500 dollars!",
    commandCategory: "random-img",
    usages: "sugar",
    cooldowns: 5
};
module.exports.run = async ({ api, event, Currencies }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    var data = await Currencies.getData(event.senderID);
        var money = data.money
      if(money < 5000) api.sendMessage("Poor You Also Want To See Girls Well\n(If you work, you can eat)",event.threadID,event.messageID)
         else {
        var data = (await axios.get("http://khuongpro.tk/api.php")).data;    
        let i = data.link.substring(data.link.lastIndexOf(".") + 1);
        let title = data.title
        Currencies.setData(event.senderID, options = {money: money - 5000})
        let callback = function () {
                    api.sendMessage({
                        body: `${title}\r\n5000 Gone From Your Hands!`,
                        attachment: fs.createReadStream(__dirname + `/cache/sugar2.${i}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sugar2.${i}`), event.messageID);
                };
                request(data.link).pipe(fs.createWriteStream(__dirname + `/cache/sugar2.${i}`)).on("close", callback);
            }
}
