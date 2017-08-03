const request = require('supertest');
const server = require('../../server');
const db = require('../../server/connection');

describe('test update user information',()=>{
    let insertId;
    beforeEach(()=>{
        db.query('insert into userInfo (userName,name,sex,age,tel,email,note) values (?,?,?,?,?,?,?)',["nh","nihao","男",18,"14230562589",
        "45263512@qq.com","other"],(err, results, fields)=>{
            insertId = results.insertId;
        })
    });

    afterEach(()=>{
        db.query("delete from userInfo where id = ?",insertId)
    });

    it('should update user is true',(done)=>{
        request(server)
            .post('/updateUser')
            .send({
                id:insertId,
                userName:'nh',
                name:'nihao',
                sex:'男',
                age:20,
                tel:'15623025623',
                email:'236256@qq.com',
                note:'love'
            })
            .expect(200,done);
    });

})