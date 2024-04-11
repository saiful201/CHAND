module.exports.config = {
    name: "fbdown",
    version: "1.0.2",
    credits: "Joshua Sy",
    hasPermssion: 1,
    description: "download fb video",
    commandCategory: "System",
    usages: "url",
    cooldowns: 0,
    dependencies: {
      "fb-tools":""
    },
};
module.exports.run = async function ({ api, event, clientL, args }) {
    var joshua = require("fb-tools");
  var juswa = args.join(" ");
  let videolink = await joshua.getVideoUrl(juswa);

  let imgs1 = (await axios.get(`${videolink}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.mp4", Buffer.from(imgs1, "utf-8"));
  var josh = [];
    josh.push(fs.createReadStream(__dirname + "/cache/img1.mp4"));
    return api.sendMessage({attachment: josh
    }, event.threadID);
}