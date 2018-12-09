import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";

import LoadingOverlay from 'react-loading-overlay';

const methods = {
    componentWillMount(props) {
        console.log('init About');
    }
}

const About = ({state, dispatch}) =>
    <div>
        <LoadingOverlay
            active={true}
            spinner
            text='Loading your content...'
        >
            <h2>About { JSON.stringify(state) }</h2>
        </LoadingOverlay>
    </div>

export default connector(lifecycle(methods)(About));
