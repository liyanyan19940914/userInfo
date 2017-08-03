import request from "superagent";

export default store => next => action =>{
    if(action.type === "GETALLUSERS"){
        request.post("/getAllUsers")
            .end((err,res)=>{
                next({type:"USER",users:res.body.users});
            })
    }
    else{
        next(action);
    }
}