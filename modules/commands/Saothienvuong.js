/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "Uranus",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Information about the planets in the solar system",
  commandCategory: "Solar System",
  usages: "Uranus",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
  ];
   var callback = () => api.sendMessage({body:`Uranus (Uranus) or Uranus (Chinese: 天王星) is the seventh planet from the Sun; is the third largest radius and fourth most massive planet in the Solar System. Uranus has a similar composition to Neptune. Both have different chemical compositions than the two larger gas giants, Jupiter and Saturn. Therefore, astronomers sometimes include these planets in the list of "ice giants". Uranus' atmosphere is similar to that of Jupiter and Saturn in basic composition such as hydrogen and helium. The other is that they contain many volatile compounds such as water, ammonia and methane along with small amounts of hydrocarbons. This planet has the coldest atmosphere of any of the planets in the Solar System, with a minimum temperature of 49 K (−224 °C). It has a complex cloud layer structure. It is likely that the lowest clouds contain mainly water while methane predominates in the upper clouds. In contrast, the interior structure of Uranus consists mainly of an ice and rock core. Like other gas giants, Uranus has a ring system, magnetosphere, and numerous natural satellites. The Uranus system has a unique structure because its axis of rotation is strongly tilted, almost parallel to the plane of the planet's orbit. So the north and south poles of this planet are located roughly at the equator compared to other planets. In 1986, images taken by the Voyager 2 spacecraft showed Uranus in visible light appearing in an almost uniform color without the bands of clouds or storms like other gas giants. Astronomers making observations from the ground have detected signs of a change in seasons and an increase in weather activity in recent years as it approaches the equinox in its orbit. Wind speeds on Uranus reach 250 meters per second (900 km/h).`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };