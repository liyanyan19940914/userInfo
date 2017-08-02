import request from 'superagent';

export default store => next => action =>{
    console.log(action.type);
    if(action.type === 'ADDUSER'){
        request.post('/addUser')
            .send({userName:action.data.userName,name:action.data.name,sex:action.data.sex,age:action.data.age,
                tel:action.data.tel,email:action.data.email,note:action.data.note})
            .end((err,res) => {
                console.log(res.body.status);
                next({type:'ADDUSER',status:res.body.status})
            })
    }else{
        next(action);
    }
}
