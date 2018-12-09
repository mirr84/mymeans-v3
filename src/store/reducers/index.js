import {combineReducers} from 'redux';

import {commonReducer} from "./commonReducer";
import {menuReducer} from "./menuReducer";
import {newsReducer} from "./newsReducer";

export default combineReducers(
    {

        commonReducer,
        menuReducer,
        newsReducer

    }
);