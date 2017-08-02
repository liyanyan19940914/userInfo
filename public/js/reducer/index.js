import {combineReducers} from 'redux';
import addUser from './addUser';
import getAllUsers from './getAllUsers';
import deleteUser from './deleteUser';
import updateUser from './updateUser';

export default combineReducers({
    addUser,
    getAllUsers,
    deleteUser,
    updateUser
});
