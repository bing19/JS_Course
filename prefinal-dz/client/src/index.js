import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

import App from './App';
import Home from './components/home';
import SignUp from './components/signup';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <BrowserRouter>
            <App>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={SignUp} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
