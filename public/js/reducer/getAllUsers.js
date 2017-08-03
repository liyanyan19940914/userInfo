module.exports = (state = {users:[]},action) =>{
    switch(action.type){
        case 'USER':{
            return {users:action.users};
        }

        default:
            return state;
    }
}