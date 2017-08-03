const expect = require('chai').expect;
const updateUser = require('../../public/js/reducer/updateUser');

describe('updateUser reducer',()=>{
    it('should return status is true',()=>{
        expect(updateUser({status:0},{type:'UPDATEUSER',status:true})).to.be.deep.equal({status:true})
    })
})