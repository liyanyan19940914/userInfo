import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import reducer from "./reducer/index";

import App from './containers/app';
import InsertUser from './containers/addUser';
import insertUserMiddleware from './middlewares/addUser';


const createStoreWithMiddleware = applyMiddleware(insertUserMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/addUser" component={InsertUser}/>
        </Router>
    </Provider>, document.getElementById('app')
);
