import request from 'superagent'

export default store=>next=>action=> {
    if (action.type === "SEARCHUSER") {
        request.post('/searchUser')
            .send({userName: action.userName})
            .end((err, res) => {
                next({type:"USER",users:res.body.user});
            });
    } else {
        next(action)
    }
}