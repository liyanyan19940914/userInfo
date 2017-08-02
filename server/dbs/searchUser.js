const db = require('../connection');

function searchUser(data,callback) {
    let sql = "select * from userInfo where userName='"+data.userName+"'";

    db.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
        } else {
            callback(results);
        }
    });
}

module.exports = searchUser;