import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reducer } from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >, document.getElementById('root'));