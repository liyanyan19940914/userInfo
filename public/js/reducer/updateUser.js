module.exports = (state = {status:0},action) =>{
    switch(action.type){
        case 'UPDATEUSER':
            return {status:action.status};
        case "RESET":
            return {status:action.status};
        default:
            return state;
    }
}