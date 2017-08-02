import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import reducer from "./reducer/index";

import App from './containers/app';
import InsertUser from './containers/addUser';
import Home from './containers/home';
import insertUserMiddleware from './middlewares/addUser';
import getAllUsersMiddleware from './middlewares/getAllUsrs';


const createStoreWithMiddleware = applyMiddleware(insertUserMiddleware,getAllUsersMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/app" component={App}/>
            <Route path="/" component={Home}/>
            <Route path="/addUser" component={InsertUser}/>
        </Router>
    </Provider>, document.getElementById('app')
);
