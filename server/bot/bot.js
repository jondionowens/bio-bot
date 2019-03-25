var AssistantV1 = require('watson-developer-cloud/assistant/v1');

var assistant = new AssistantV1({
  version: '{version}',
  iam_apikey: '{apikey}',
  url: '{url}'
});