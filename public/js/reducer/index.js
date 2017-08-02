import {combineReducers} from 'redux';
import addUser from './addUser';
import getAllUsers from './getAllUsers';

export default combineReducers({
    addUser,
    getAllUsers
});
