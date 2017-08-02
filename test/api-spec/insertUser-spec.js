const request = require('supertest');
const server = require('../../server');
const db = require('../../server/connection');

describe('test insert user',function(){
    let user;

    beforeEach(function () {
        user = {
            userName:'zhangsan',
            name:'zhang',
            sex:'男',
            age:20,
            tel:'18902354526',
            email:'said@163.com',
            note:'happy'
        }
    });
    afterEach(function(){
        db.query("delete from userInfo where userName = ?",user.userName)
    })
    it('should insert user is true',(done) => {
        request(server)
            .post('/addUser')
            .send(user)
            .expect(200,{status:true},done);
    })
})