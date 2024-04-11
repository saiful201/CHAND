module.exports.config = {
    name: "Prime",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Leo",
    description: "Checking for prime numbers",
    commandCategory: "study",
    usages:"[num]",
    cooldowns: 5,
};



module.exports.run = async ({event, api }) =>  {
    function snt(n) {
        var flag = true ;
        if (n < 2) {
            flag = false;
        }
        else {
            for (var i = 2; i < n-1; i++) {
                if (n % i == 0){
                    flag = false;
                    break;
                }
            }
        } 
        if (flag == true){
            return api.Message(n + "is a prime number ",event.threadID,event.messageID);
        }
        else {
            return api.Message(n + "not prime",event.threadID,event.messageID)
        }
    }
}