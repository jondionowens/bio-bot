require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const cors = require('cors');
const jonBot = require('./bot/bot.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/', express.static(path.join(__dirname, '../public')));

app.post('/api/bot', (req, res) => {
  jonBot.message({
    workspace_id: process.env.WATSON_JONBOT_WORKSPACE_ID,
    input: {'text': req.body.userMessage}
  },  function(err, response) {
    if (err)
      console.log('error:', err);
    else
      // you need to return the entire response object to get access to all the timing stuff
      console.log(response.output.generic)
      res.send(JSON.stringify(response, null, 2))
  });
});

app.get('/api/test', (req, res) => {
  res.json({"text": "hello"})
});

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
})

//