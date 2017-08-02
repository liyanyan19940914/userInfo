module.exports = (state = {users:[]},action) =>{
    switch(action.type){
        case 'USER':{
            console.log('reduce',action.users);
            return {users:action.users};
        }

        default:
            return state;
    }
}