const express = require('express');
const route = express.Router();
const updateUser = require('../dbs/updateUser');

route.post('/updateUser',(req,res) => {
    const userInformation = req.body;
    updateUser(userInformation,(result,err)=>{
        if (err) {
            res.status(500);
        } else {
            res.send(result)
        }
    })
});

module.exports = route;