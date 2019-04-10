const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
  version: '2018-09-20',
  iam_apikey: process.env.WATSON_JONBOT_KEY,
  url: process.env.WATSON_JONBOT_URL
});

module.exports = assistant;
