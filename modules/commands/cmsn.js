module.exports.config = {
    name: "cmsn",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "huy hoàng",
    description: "Make the bot return Google's audio file via text",
    commandCategory: "media",
    usages: "music [Lang] [Text]",
    cooldowns: 30,
    info: [
        {
            key: "Lang",
            prompt: "The language you want the bot to return results to, default is Vietnamese, there are 4 languages 'ru, en, ja, vi",
            type: 'Text',
            example: 'vi'
        },
        {
            key: "Text",
            prompt: "The text you need the bot to return results to in the voice bar, note the length is less than 100 words!",
            type: 'Text',
            example: 'Mirai-Chan hello everyone'
        }
    ]
};

module.exports.run = function({ api, event, args }) {
    const request = require("request");
    const fs = require("fs-extra");
    var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
    var languageToSay = (["ru","en","ko","ja"].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : 'vi';
    var msg = (languageToSay != 'vi') ? content.slice(3, content.length) : content;
    return request(`https://cdn.fbsbx.com/v/t59.3654-21/182709263_465727088014283_1491447527074977050_n.mp4/audioclip-1620533648000-289460.mp4?_nc_cat=106&ccb=1-3&_nc_sid=7272a8&_nc_ohc=it39EZJF9zsAX_8jDTY&_nc_ht=cdn.fbsbx.com&oh=0fbab15398985f3781db3300017a3ff5&oe=6098BA09&dl=1`) .pipe(fs.createWriteStream(__dirname+'/cache/say.mp3')).on('close',() => api.sendMessage({body: "", attachment: fs.createReadStream(__dirname + "/cache/say.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/say.mp3")));
}