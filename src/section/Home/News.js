import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";

const methods = {
    componentWillMount(props) {
        console.log('init News', props.match.params.id);

    }
}

const News = ({match, state, dispatch}) =>
    <div>

        News

        {JSON.stringify(match.params.id)}

    </div>

export default connector(lifecycle(methods)(News));
