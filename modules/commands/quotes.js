https://api.popcat.xyz/quote
https://api.xteam.xyz/quotemaker?text=${quotes}&APIKEY=bb87827d6c4b905e
module.exports.config = {
  name: "randomc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "random color",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const res = await axios.get(`https://api.popcat.xyz/quote`);
    var data = res.data.image;