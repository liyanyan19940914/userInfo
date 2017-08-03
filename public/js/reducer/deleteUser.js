module.exports = (state = {delStatus: 0}, action) => {
    switch (action.type) {
        case "DELETEUSER":{
            return {delStatus: action.status};
        }
        default:
            return state
    }
};