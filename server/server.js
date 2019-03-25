require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const jonBot = require('./bot/bot.js');


app.use('/', express.static(path.join(__dirname, '../public')));

app.use('/api/bot', (req, res) => {
  jonBot.message({
    workspace_id: process.env.WATSON_JONBOT_WORKSPACE_ID,
    input: {'text': 'Hello'}
  },  function(err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
})

