import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";

import LoadingOverlay from "react-loading-overlay";

const methods = {
    componentWillMount(props) {
        console.log('init Reg');
    }
}

const Reg = ({match}) =>
    <div>

        <LoadingOverlay
            active={true}
            spinner
            text='Loading your content...'
        >

            Reg

        </LoadingOverlay>

    </div>

export default connector(lifecycle(methods)(Reg));
