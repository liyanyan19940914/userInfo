const express = require('express');
const route = express.Router();
const getAllUsers = require('../dbs/getAllUsers');

route.post('/getAllUsers', (req, res) => {
    getAllUsers(req.body, (result,err)=> {
        res.send({ users: result})
    });
});

module.exports = route;