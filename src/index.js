import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducers/index';
import axios from "axios";
import {getStorage} from "./store/utils/getStorage";

import App from './App/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(reducer);
store.subscribe(() => getStorage().storage.setItem('store', JSON.stringify(store.getState())));

axios.interceptors.request.use(
    (config) => {
        return Promise.resolve(config);
    },
    (error) => {
        return Promise.reject(error);
    }
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);