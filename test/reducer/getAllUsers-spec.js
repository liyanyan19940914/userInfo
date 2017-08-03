const expect = require('chai').expect;
const getAllUsers = require("../../public/js/reducer/getAllUsers");

describe('getAllUsers reducer',()=>{
    it('should return users array',()=>{
        expect(getAllUsers({users:[]},{type:'USER',users:{
            id:1,
            userName:'zhangsan',
            name:'zhang',
            sex:'男',
            age:20,
            tel:'18902354526',
            email:'said@163.com',
            note:'happy'
        }})).to.be.deep.equal(
            {
               users:{
                   id:1,
                   userName:'zhangsan',
                   name:'zhang',
                   sex:'男',
                   age:20,
                   tel:'18902354526',
                   email:'said@163.com',
                   note:'happy'
               }
            }
        )
    })
});