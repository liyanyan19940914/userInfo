module.exports = (state = {status:0},action) =>{
    switch(action.type){
        case 'ADDUSER':
            return {status:action.status};
        case "RESET":
            return {status:action.status}
        default:
            return state;
    }
}