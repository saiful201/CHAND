module.exports.config = {
 name: "sừng",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "JRT",
 description: "Horning Any Person You Want",
 commandCategory: "game",
 usages: "camsung",
 cooldowns: 5
};

module.exports.run = async function({ api, event, Users, Currencies }) {
 var alluser = global.data.allUserID
    let victim = alluser[Math.floor(Math.random() * alluser.length)];
    let nameVictim = (await Users.getData(victim)).name
    if (victim == api.getCurrentUserID() && event.senderID == victim) return api.sendMessage('Sorry, you cannot cuckold this person. Please try again.', event.threadID, event.messageID);
    var route = Math.floor(Math.random() * 2);
    if (route > 1 || route == 0) {
    const moneydb = (await Currencies.getData(victim)).money;
       var money = Math.floor(Math.random() * 1000) + 1;
        if (moneydb <= 0 || moneydb == undefined) return api.sendMessage(`You were just trying to cheat ${nameVictim} being a faithful person so you can't seduce them`, event.threadID, event.messageID);
        else if (moneydb >= money) return api.sendMessage(`You just cuckolded ${nameVictim} success try to hide your glasses or your lover will bury you alive`, event.threadID, async () => {
            await Currencies.increaseMoney(victim, parseInt("-"+money))
            await Currencies.increaseMoney(event.senderID, parseInt(money))
        }, event.messageID);
        else if (moneydb < money) return api.sendMessage(`You just cuckolded ${nameVictim} right in this group congrats on becoming a traitor in love`, event.threadID, async () => {
            await Currencies.increaseMoney(victim, parseInt("-"+money))
            await Currencies.increaseMoney(event.senderID, parseInt(money))
        }, event.messageID);
    }
    else if (route == 1) {
        var name = (await Users.getData(event.senderID)).name
        var moneyuser = (await Currencies.getData(event.senderID)).money
            if (moneyuser <= 0) return api.sendMessage("Because you're ugly, you can't seduce anyone. Let's go to plastic surgery to seduce and cuckold", event.threadID, event.messageID);
            else if (moneyuser > 0) return api.sendMessage(`You Just Got Hit By A Car For Cuckolding You ${moneyuser} VND For Hospitalization .`, event.threadID, () => api.sendMessage({ body: `Condolences To {nameVictim} Your Wife Just Got Jealousy ${name} Made His Pants Stick To The Guava Tree`, mentions: [{ tag: nameVictim, id: victim }, { tag: name, id: event.senderID }] }, event.threadID, async () => {
                await Currencies.increaseMoney(event.senderID, parseInt("-"+ moneyuser))
                await Currencies.increaseMoney(victim, parseInt(Math.floor(moneyuser / 2))) 
            }), event.messageID);
        
    }
}