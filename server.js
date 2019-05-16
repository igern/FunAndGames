const express = require('express')
const app = express();
const path = require('path')
const moment = require('moment');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get('/moment', (req, res) => {
    res.send(moment().subtract(10, 'hours').format('LTS'));
});

app.listen(process.env.PORT || 4000, () => {
    console.log('Your node js server is running');
});