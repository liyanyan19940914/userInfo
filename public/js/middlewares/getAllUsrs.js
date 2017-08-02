import request from "superagent";

export default store => next => action =>{
    if(action.type === "GETALLUSERS"){
        console.log(action.type)
        request.post("/getAllUsers")
            .end((err,res)=>{
                console.log('allUsers middleware',res.body.user);
                next({type:"GETALLUSERS",user:res.body.user});
            })
    }
    else{
        next(action);
    }
}