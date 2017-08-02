import {combineReducers} from 'redux';
import addUser from './addUser';
import getAllUsers from './getAllUsers';
import deleteUser from './deleteUser';

export default combineReducers({
    addUser,
    getAllUsers,
    deleteUser
});
