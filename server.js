const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = new express();

const addUser = require('./server/routers/addUser');
const getAllUsers = require('./server/routers/getAllUsers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));

app.use('/',addUser);
app.use('/',getAllUsers);

app.get('*', (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;
