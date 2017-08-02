const express = require("express");
const route = express.Router();
const searchUser = require("../dbs/searchUser");

route.post('/searchUser', (req, res) => {
    var userName = req.body;
    searchUser(userName, (result, err)=> {
        if (err) {
            res.status(500);
        } else {
            res.send({user: result})
        }
    });
});

module.exports = route;