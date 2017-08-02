const express = require("express");
const route = express.Router();
const deleteUser = require("../dbs/deleteUser");

route.post('/deleteUser', (req, res) => {
    deleteUser(req.body, (result,err)=> {
        let httpCode = 200;
        if (err) {
            res.send({status:false})
        } else {
            res.send({status:true})
        }
    });
});

module.exports = route;