var AssistantV1 = require('watson-developer-cloud/assistant/v1');

var assistant = new AssistantV1({
  version: 'DFSDFS',
  iam_apikey: 'process.env.WATSON_JONBOT_KEY',
  url: 'process.env.WATSON_JONBOT_URL'
});

export default assistant;