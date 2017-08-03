const server = require('../../server');
const request = require('supertest');

describe('test search user',()=>{
    it('should search user is true',(done)=>{
        request(server)
            .post('/searchUser')
            .send({userName:'ly'})
            .expect(200,done)
    })
});