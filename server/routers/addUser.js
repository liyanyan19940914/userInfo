const express = require('express');
const route = express.Router();
const insertUser = require('../dbs/addUser');

route.post('/addUser',(req,res) => {
    const userInformation = req.body;
    insertUser(userInformation,(result,err)=>{
        if (err) {
            res.status(500);
        } else {
            res.send(result)
        }
    })
});

module.exports = route;