require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const jonBot = require('./bot/bot.js');


app.use('/', express.static(path.join(__dirname, '../public')));

app.post('https://5cae755c5fa2420008ef80e5--focused-panini-13e9e6.netlify.com/api/bot', (req, res) => {
  jonBot.message({
    workspace_id: process.env.WATSON_JONBOT_WORKSPACE_ID,
    input: {'text': req.body.userMessage}
  },  function(err, response) {
    if (err)
      console.log('error:', err);
    else
      res.send(JSON.stringify(response.output.text, null, 2))
  });
});

app.get('https://5cae755c5fa2420008ef80e5--focused-panini-13e9e6.netlify.com/api/test', (req, res) => {
  res.json({"text": "hello"})
});

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
})

