import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import reducer from "./reducer/index";

import App from './containers/app';
import InsertUser from './containers/addUser';
import Home from './containers/home';
import UpdateUser from './containers/updateUser';
import insertUserMiddleware from './middlewares/addUser';
import getAllUsersMiddleware from './middlewares/getAllUsrs';
import deleteUserMiddleware from './middlewares/deleteUser';
import updateUserMiddleware from './middlewares/updateUser';
import searchUserMiddleware from './middlewares/searchUser';


const createStoreWithMiddleware = applyMiddleware(insertUserMiddleware,getAllUsersMiddleware,deleteUserMiddleware,
    updateUserMiddleware,searchUserMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/app" component={App}/>
            <Route path="/" component={Home}/>
            <Route path="/addUser" component={InsertUser}/>
            <Route path="/updateUser" component={UpdateUser}/>
        </Router>
    </Provider>, document.getElementById('app')
);
