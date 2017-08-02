const db = require('../connection');

function deleteUser(data,callback){
    let sql = "delete from userInfo where id = " + data.id;

    db.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
        } else {
            callback(results);
        }
    });
}

module.exports = deleteUser;