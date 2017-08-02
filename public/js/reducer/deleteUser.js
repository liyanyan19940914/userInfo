module.exports = (state = {delStatus: 0}, action) => {
    switch (action.type) {
        case "DELETEUSER":{
            console.log('delete reducer',action.status);
            return {delStatus: action.status};
        }
        default:
            return state
    }
};