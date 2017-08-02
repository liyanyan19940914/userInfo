module.exports = (state = {users:[]},action) =>{
    switch(action.type){
        case 'GETALLUSERS':{
            console.log('reduce',action.users);

            return {users:action.users};
        }

        default:
            return state;
    }
}