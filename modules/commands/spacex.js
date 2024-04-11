const request = global.nodemodule['request'];

module.exports.config = {
  name: "spacex",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "Get information about the latest launch of SpaceX",
  commandCategory: "space",
  usages: "spacex",
  cooldowns: 5,
  dependencies: {
    "request": ""
  }
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  return request(`https://api.spacexdata.com/v3/launches/latest`, (err, response, body) => {
    if (err) throw err;
    var data = JSON.parse(body);
    api.sendMessage(`Information about the latest launch of SpaceX:\n- Mission: ${data.mission_name}\n- Launch year: ${data.launch_year}\n- Launch time: ${data.launch_date_local}\n- Rocket: ${data.rocket.rocket_name}\n- Link YouTube: ${data.links.video_link}`, event.threadID, event.messageID);
  });
}