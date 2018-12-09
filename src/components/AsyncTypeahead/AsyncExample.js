import React, {Component, Fragment} from 'react';

import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import {makeAndHandleRequest} from "../../services/testService";
import {TypeaheadUserItem} from "./TypeaheadUserItem";

const handleSearch = (query, _this) => {
    _this.setState({isLoading: true});
    makeAndHandleRequest(query)
        .then(({options}) => {
            _this.setState({
                isLoading: false,
                options,
            });
        });
}

export class AsyncExample extends Component {

    state = {
        allowNew: false,
        isLoading: true,
        multiple: false,
        minLength: 1,
        options: [],
    };

    render() {
        return (
            <Fragment>
                <AsyncTypeahead
                    {...this.state}
                    labelKey="login"
                    onSearch={ (q) => handleSearch(q, this)  }
                    placeholder="Search for a Github user..."
                    renderMenuItemChildren={ (option, props) => <TypeaheadUserItem key={option.id} user={option} /> }
                />
            </Fragment>
        );
    }

}