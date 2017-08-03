const request = require('supertest');
const server = require('../../server');

describe('test getallUsers',()=>{
    it('should get all users is true',(done)=>{
        request(server)
            .post('/getAllUsers')
            .expect(200,done)
    })
})