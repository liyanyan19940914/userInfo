const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = new express();

const addUser = require('./server/routers/addUser');
const getAllUsers = require('./server/routers/getAllUsers');
const deleteUser = require('./server/routers/deleteUser');
const updateUser = require('./server/routers/updateUser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));

app.use('/',addUser);
app.use('/',getAllUsers);
app.use('/',deleteUser);
app.use('/',updateUser);

app.get('*', (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;
