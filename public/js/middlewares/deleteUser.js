import request from 'superagent'

export default store=>next=>action=> {
    if (action.type === "DELETEUSER") {
        console.log(action.id);
        request.post('/deleteUser')
            .send({id: action.id})
            .end((err, res) => {
                console.log(res.body.status);
                next({type:"DELETEUSER",status:res.body.status});
            });
    } else {
        next(action)
    }
}