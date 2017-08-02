const db = require('./../connection');

function getAllUsers(data, callback) {

    let sql = "select * from userInfo;";

    db.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
        } else {
            callback(results);
        }
    });
};

module.exports = getAllUsers;