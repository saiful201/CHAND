module.exports.config = {
  name: "bede",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "SEN",
  description: "measure the dike",
  commandCategory: "other",
  cooldowns: 5
};

module.exports.run = function({ api, event }) {
  const data = ["Your levity is 1%", "Your levity is 2%", "Your levity is 3%", "Your levity is 4%", "Your levity is 5%", "Your levity is 6%", "Your levity is 7%", "Your levity is 8%", "Your levity is 9%", "Your levity is 10%", "Your levity is 11%", "Your levity is 12%", "Your levity is 13%", "Your levity is 14%", "Your levity is 15%", "Your levity is 16%", "Your levity is 17%", "Your levity is 18%", "Your levity is 19%", "Your levity is 20%", "Your levity is 21%", "Your levity is 22%", "Your levity is 23%", "Your levity is 24%", "Your levity is 25%", "Your levity is 26%", "Your levity is 27%", "Your levity is 28%", "Your levity is 29%", "Your levity is 30%", "Your levity is 31%", "Your levity is 32%", "Your levity is 33%", "Your levity is 34%", "Your levity is 35%", "Your levity is 36%", "Your levity is 37%", "Your levity is 38%", "Your levity is 39%", "Your levity is 40%", "Your levity is 41%", "Your levity is 42%", "Your levity is 43%", "Your levity is 44%", "Your levity is 45%", "Your levity is 46%", "Your levity is 47%", "Your levity is 48%", "Your levity is 49%", "Your levity is 50%", "Your levity is 51%", "Your levity is 52%", "Your levity is 53%", "Your levity is 54%", "Your levity is 55%", "Your levity is 56%", "Your levity is 57%", "Your levity is 58%", "Your levity is 59%", "Your levity is 60%", "Your levity is 61%", "Your levity is 62%", "Your levity is 63%", "Your levity is 64%", "Your levity is 65%", "Your levity is 66%", "Your levity is 67%", "Your levity is 68%", "Your levity is 69%", "Your levity is 70%", "Your levity is 71%", "Your levity is 72%", "Your levity is 73%", "Your levity is 74%", "Your levity is 75%", "Your levity is 76%", "Your levity is 77%", "Your levity is 78%", "Your levity is 79%", "Your levity is 80%", "Your levity is 81%", "Your levity is 82%", "Your levity is 83%", "Your levity is 84%", "Your levity is 85%", "Your levity is 86%", "Your levity is 87%", "Your levity is 88%", "Your levity is 89%", "Your levity is 90%", "Your levity is 91%", "Your levity is 92%", "Your levity is 93%", "Your levity is 94%", "Your levity is 95%", "Your levity is 96%", "Your levity is 97%", "Your levity is 98%", "Your levity is 99%", "Your levity is 100%",
  ];
  return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}