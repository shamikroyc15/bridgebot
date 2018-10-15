const { WebClient } = require("@slack/client");
const { parse } = require("querystring");

const token = process.env.SLACK_TOKEN;

module.exports.pollGroup = (event, context, callback) => {
  const web = new WebClient(token);
  const body = parse(event.body);
  return web.chat
    .postMessage({
      channel: body.channel_id,
      attachments: [
        {
          text: "Hello from BridgeBot!"
        }
      ]
    })
    .then(res => {
      return {
        statusCode: 200
      };
    })
    .catch(err => {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          error: err.message
        })
      };
    });
};
