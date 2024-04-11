module.exports.config = {
    name: "xinmodule",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Bùi Lê Bảo Luân",//Vui lòng không thay credit nếu không muốn làm súc sinh
    description: "Begging someone to give me 1 mdl :))",
    commandCategory: "group",
    usages: "xinmodule @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Need to tag 1 friend who wants to apply for the module", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Start asking, remember to pay me the fee !");
setTimeout(() => {a({body: "Hello procoder " + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Let me get to know you idol,super idol the show!!" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "But I don't like long lines so I'll just say it straight " + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "The thing is, I want to ask bro for an mdl " + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "okay bro?" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Can you give it to me please? " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Nhaaaaaaaa " + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "I love you so much UwU " + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Please give me mdl" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Nha bro" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Love you so much bro" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Nha nha nha nha nha" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Nhaaa :<" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "I love" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Wait for me to take a break, beg you are too tired" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Puffy lol" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "It's fine" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "And now will you give it to me?" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Give or don't give, don't give or give, say a word" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Don't make me crazy" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("eat that")} , 90000);
setTimeout(() => {a({body: "Still won't let" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "Damn it" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "If you don't give, then turn" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("GOODS !")} , 110000);


  
  }