const db = require('./../connection');

function insertUser(userInformation,callback) {
    console.log(userInformation.userName);
    let sql = "INSERT INTO userInfo(userName,name,sex,age,tel,email,note) " +
        "VALUES('" + userInformation.userName + "','" + userInformation.name + "','" + userInformation.sex + "','" +
        userInformation.age + "','" + userInformation.tel + "','" + userInformation.email + "','" + userInformation.note + "')";


    db.query(sql, function (err, results, fields) {
        if (err) {
            console.log("err");
            throw err;
        } else {
            callback({status:true});
        }
    });
}

module.exports = insertUser;