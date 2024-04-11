/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "Saturn",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Information about the planets in the solar system",
  commandCategory: "Solar System",
  usages: "Saturn",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  ];
   var callback = () => api.sendMessage({body:`Saturn (Saturn) or Saturn (Chinese: 土星) is the sixth planet by average distance from the Sun and the second largest planet in diameter and mass, after Jupiter in the Solar System. . The English name of the planet is named after the Roman god Saturn, the planet's astronomical symbol is (♄) representing the god's sickle. Saturn is a gas giant with an average radius 9 times that of Earth. Although the planet's mass is 95 times that of Earth, at 763 times more massive, Saturn's average density is only one-eighth that of Earth's. Saturn's internal structure probably consists of a core of iron, nickel, and rock (compound of silicon and oxygen), surrounded by a thick layer of metallic hydrogen, an intermediate layer between liquid hydrogen and liquid helium and the upper atmosphere. The planet's pale yellow color is due to the presence of ammonia crystals in the upper atmosphere. Electric currents within the metallic hydrogen layer are responsible for the fact that Saturn has a planetary magnetic field with a strength slightly weaker than that of Earth and one-twelfth that of Jupiter's. The planet's upper atmosphere is uniform in color and appears calm compared to Jupiter's turbulent atmosphere, although it also has strong storms. Wind speeds on Saturn can reach 1,800 km/h, faster than on Jupiter, but not as fast as those on Neptune. Saturn has a ring system consisting of nine continuous main rings and three broken arcs, they contain mainly ice particles with small amounts of dust and rock. Saturn has 82 known natural satellites; of which 53 satellites have been named. This number of satellites does not include the hundreds of small satellites ("moonlets") within the belt. Titan is the largest moon of Saturn and the second largest moon in the Solar System, it is also larger than Mercury and the only natural satellite in the Solar System with a dense atmosphere..`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };