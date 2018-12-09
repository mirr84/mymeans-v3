import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";

import './css/style.css';
import './img/emoji.png';

const methods = {
    componentWillMount(props) {
        console.log('init NoMatch');
    }
}

const NoMatch = ({state, dispatch, location}) =>
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404"></div>
            <h1>404</h1>
            <h2>Oops! Страница не найдена</h2>
            <p>Извините, но страница, которую вы ищете, не существует, была удалена или имя изменено или временно недоступена</p>
        </div>
    </div>

export default connector(lifecycle(methods)(NoMatch));
