const AssistantV1 = require('ibm-watson/discovery/v1');

const assistant = new AssistantV1({
  version: '2019-02-01',
  iam_apikey: process.env.WATSON_JONBOT_KEY,
  url: process.env.WATSON_JONBOT_URL
});

module.exports = assistant;
