const db = require('../connection');

function updateUser(data,callback){
    let sql = "UPDATE userInfo SET userName='" + data.userName + "',name='" + data.name + "',sex='" + data.sex +
        "',age='" + data.age + "',tel='" + data.tel + "',email='" + data.email + "',note='" + data.note + "' where id='" + data.id + "'";

    db.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
        } else {
            callback({status:true});
        }
    });
}

module.exports = updateUser;