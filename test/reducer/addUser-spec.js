const expect = require('chai').expect;
const addUser = require('../../public/js/reducer/addUser');

describe('addUser reducer',()=>{
    it('should return status is true',()=>{
        expect(addUser({status:0},{type:'ADDUSER',status:true})).to.be.deep.equal({status:true})
    })
})