import request from 'superagent';

export default store => next => action => {
    if(action.type === 'UPDATEUSER'){
        request.post('/updateUser')
            .send({id:action.data.id,userName:action.data.userName,name:action.data.name,sex:action.data.sex,age:action.data.age,
                tel:action.data.tel,email:action.data.email,note:action.data.note})
            .end((err,res)=>{
                console.log('update',res.body.status);
                next({type:'UPDATEUSER',status:res.body.status})
            })
    }
    else{
        next(action);
    }
}