import request from 'superagent'

export default store=>next=>action=> {
    if (action.type === "DELETEUSER") {
        request.post('/deleteUser')
            .send({id: action.id})
            .end((err, res) => {
                next({type:"DELETEUSER",status:res.body.status});
            });
    } else {
        next(action)
    }
}