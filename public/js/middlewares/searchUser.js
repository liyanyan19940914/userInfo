import request from 'superagent'

export default store=>next=>action=> {
    if (action.type === "SEARCHUSER") {
        console.log(action.userName);
        request.post('/searchUser')
            .send({userName: action.userName})
            .end((err, res) => {
                console.log(res.body.status);
                next({type:"SEARCHUSER",status:res.body.status});
            });
    } else {
        next(action)
    }
}