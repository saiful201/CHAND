module.exports.config = {
  name: "ytinfo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "View information youtube",
  commandCategory: "others",
  usages: "[title]",
  cooldowns: 5
};

module.exports.run = async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var tip = args.join(" ");
  if (!tip) return api.sendMessage(`Add text lmao`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://manhict.tech/api/ytplay?query=${encodeURIComponent(tip)}&apikey=lgG765KO`).then(res =>
    {
      let t = res.data.result.title,
        d = res.data.result.desc,
        ud = res.data.result.uploadDate,
        c = res.data.result.channel,
        v = res.data.result.views
      var flag = res.data.result.thumb;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `Title: ${t}\nUpload Date: ${ud}\nChannel: ${c}\nViews: ${v}\n\nDescription: ${d}`,
          attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(flag)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}