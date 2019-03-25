require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const jonbot = require('./bot/bot.js')
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/test', (req, res) => {
  console.log()
})

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
})