/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "Sun",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Information about the planets in the solar system",
  commandCategory: "Solar System",
  usages: "sun",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
  ];
   var callback = () => api.sendMessage({body:`The Sun (English: Sun; also known as the Sun or Japan), is the star at the center of the Solar System, accounting for about 99.86% of the Solar System's mass. The Earth and other celestial bodies such as planets, asteroids, meteorites, comets, and dust orbit the Sun. The average distance between the Sun and Earth is approximately 149.6 million kilometers (1 AU), so it takes 8 minutes and 19 seconds for sunlight to reach Earth. Over the course of a year, this varies from 147.1 million kilometers (0.9833 AU) at perihelion (about January 3), to as far as 152.1 million kilometers (1.017 AU) at aphelion. (around July 4th). Solar energy in the form of light supports most life on Earth through photosynthesis, and controls Earth's climate and weather. The Sun is composed of hydrogen (about 74% by mass, or 92% by volume), helium (about 24% by mass, 7% by volume), and small amounts of other elements, including iron, nickel, and oxygen. , silicon, sulfur, magnesium, carbon, neon, calcium, and chromium.
The Sun has spectral class G2V. G2 means that it has a surface temperature of approximately 5,778 K (5,505 °C) which makes it white, and usually yellow when viewed from the Earth's surface by atmospheric scattering. It is this scattering of light at the blue end of the spectrum that makes the sky blue. The solar spectrum contains ionization lines and neutral metals as well as very weak hydrogen lines. V (Roman 5) in the spectral class indicates that the Sun, like most stars, is a main sequence star. This means it generates energy by nuclear fusion of hydrogen nuclei into helium. There are over 100 million G2 class stars in our Milky Way galaxy. Once considered a small and fairly insignificant star, in fact, according to current knowledge, the Sun is brighter than 85% of the stars in the Milky Way, with the majority being red dwarfs. The Sun's hot halo is constantly open. Spanning space and creating the solar wind are streams of particles 5 times the speed of sound - extending the heliopause to a distance of approximately 100 AU. The bubble in the interstellar medium is formed by the solar wind, the heliosphere is the largest continuum in the Solar System. The Sun is currently passing through the Local Interstellar Cloud. in the low-density Local Bubble region of high-temperature diffuse gas, in the inner rim of the Milky Way's Orion Arm, between the Perseus arm and the Sagittarius arm of the galaxy. Of the 50 nearest star systems within 17 light-years from Earth, the Sun ranks 4th in mass as a quaternary star (M = +4.83), although there are some slightly different magnitude values. are given, for example 4.85 and 4.81. The Sun orbits the center of the Milky Way at a distance of approximately 24,000–26,000 light-years from the center of the Milky Way, moving generally in the direction of the constellation Cygnus and completing one revolution every 225–250 million years (one year). Galaxy). Its orbital speed is said to be around 250 ± 20, km/s but a new estimate puts it at 251 km/s.
Because our Milky Way is moving relative to the Cosmic Microwave Radiation (CMB) in the direction of the constellation Hydra at 550 km/s, its speed relative to the CMB is about 370 km/s. in the direction of the constellation Crater or Leo.`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };