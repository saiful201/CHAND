module.exports.config = {
    name: "yeuCtu",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "DũngKon",
    description: "Dung's Quotes For Ctu❤",
    commandCategory: "Is different",
    cooldowns: 1
};

module.exports.run = function ({ api, event }) {
    const data = ["I just want to say...I love you so much (Ctu❤ )","To the world, you may be just one person, but to me, you are the whole world (Ctu❤)","World The limit of the function is lim. My limit is Ctu's heart❤","I love Ctu more than salt in the sea...","Bird belongs to the forest, Ctu belongs to Dung"
    ];
    return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}