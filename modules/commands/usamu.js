module.exports.config = {
  name: "usamu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kadeer",
  description: "Someone's sister :>",
  commandCategory: "ramdom-images",
  usages: "usamu",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apiusamu.khoahoang3.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🌸We don’t use either <3\n🌸Number of photos available: ${count} Photo`,
            attachment: fs.createReadStream(__dirname + `/cache/usamu.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/usamu.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/usamu.${ext}`)).on("close", callback);
      })
}