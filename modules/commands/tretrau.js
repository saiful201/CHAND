module.exports.config = {
    name: "tretrau",
    version: "1.2.0",
    hasPermssion: 0,
    credits: "BraSL",
	description: "tag 1 person in, no tag = self-slapping",
    commandCategory: "young buffalo to 1 friend tag",
    usages: "[tag]",
    cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "tretrau.png")) request("https://imgur.com/AC7pnk1.jpg").pipe(fs.createWriteStream(dirMaterial + "tretrau.png"));
}

async function makeImage({ one, two }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");
    let totinh_img = await jimp.read(__root + "/tretrau.png");
    let pathImg = __root + `/totinh_${one}_${two}.png`;
    //let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    /*let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    */
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    //let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
   totinh_img.resize(500, 500).composite(circleTwo.resize(120, 120), 210, 86);//.composite(circleTwo.resize(90, 90), 320, 119);
    
    let raw = await totinh_img.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
   // fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args, client }) {
    const fs = require("fs-extra");
    let { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions)[0]
	let tag = event.mentions[mention].replace("@", "");
	if (!mention) return api.sendMessage("No one to talk to young buffalo? Trau boy", threadID, messageID);
    else {
        var one = senderID, two = mention;
		return makeImage({ one, two }).then(path => api.sendMessage({ body: "sorry but i was too curious so i went to your fb" + tag + '\n took a look, i see you're so young so it can't be over, this is simple, you just enthusiastically help people, no matter what if it's within your power, but watch out lest you be taken advantage of, and it's not necessary to play With everyone, just find a few close friends to play with, hope you can integrate into the community soon',
			mentions: [{
          tag: tag,
          id: mention
        }],
     attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
    /* var ngoaitru = Object.keys(event.mentions)[
	'100012371343281',//việt lê
	'100065937910583' //Thiên Ân
	]
	if (!ngoaitru) return api.sendMessage("Bạn này không hề trẻ trâu tí nào😾😼!", threadID, messageID);  */
}
