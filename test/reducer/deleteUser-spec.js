const expect = require('chai').expect;
const deleteUser = require('../../public/js/reducer/deleteUser');

describe('deleteUser reducer',()=>{
    it('should return delStatus is true',()=>{
        expect(deleteUser({delStatus: 0},{type:'DELETEUSER',status:true})).to.be.deep.equal({delStatus:true})
    })
})