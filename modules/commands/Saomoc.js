/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "Jupiter",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Information about the planets in the solar system",
  commandCategory: "Solar System",
  usages: "Jupiter",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/5/5a/Jupiter_by_Cassini-Huygens.jpg",
  ];
   var callback = () => api.sendMessage({body:`Jupiter (Jupiter) or Jupiter (Chinese: 木星) is the fifth planet from the Sun and is the largest planet in the Solar System. It is a gas giant with a mass one thousandth of the Sun but two and a half times the total mass of all the other planets in the Solar System combined. Jupiter is classified as a gas giant together with Saturn (Uranus and Neptune are classified as ice giants). These two planets are sometimes called Jupiter-type planets or outer planets. This planet was known to ancient astronomers, and is associated with myths and religious beliefs in many cultures. The Romans named the planet after the god Jupiter, the most important of the gods. The name in Chinese, Korean, Japanese and Vietnamese of this planet is based on the "wood" element in the five elements. As seen from Earth, Jupiter has an apparent magnitude of −2.94, bright enough to cast a shadow; and is the third brightest object in the night sky after the Moon and Venus. (Mars is almost as bright as Jupiter when Mars is in opposite positions in its orbit to Earth.)
Jupiter contains mainly hydrogen and helium - a quarter of its mass, although helium makes up only a tenth of the molecules. There may be a rocky core within the planet containing heavier elements, but like other gas giants, Jupiter does not have a solid, solid surface. Because of its rapid rotation, the planet's shape is spheroidal (it bulges slightly at the equator). The outermost layer of the atmosphere shows up with multiple bands of clouds at different heights, as a result of aerodynamic turbulence and interaction with storms at the edge. A striking feature of its images is the Great Red Spot, a massive storm known to have existed since at least the 17th century when astronomers first observed it with telescopes. Surrounding Jupiter is a faint ring system as well as a strong magnetosphere. There are at least 67 natural satellites orbiting it, including the four largest, called the Galileo satellites, which were first observed by the scientist Galileo Galilei in 1610. Ganymede, the largest moon, has a large diameter. than Mercury.
Several spacecraft have explored Jupiter, including Pioneer and Voyager in flybys and the Galileo spacecraft that orbited the planet. The last spacecraft to fly by Jupiter on its way to Pluto - New Horizons passed in late 2007. The spacecraft uses the assistance of Jupiter's gravity to increase its speed. Currently, NASA's Juno spacecraft has arrived on July 5, 2016. In the future, there is an ESA mission to explore the Galileo satellites in general and Europa in particular..`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };