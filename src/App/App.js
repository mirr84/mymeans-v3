import React from 'react';

import {connector} from "../store/utils/connector";
import lifecycle from "react-pure-lifecycle";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Container} from "reactstrap";

import Menu from "../components/Menu/Menu";
import NoMatch from "../section/NoMatch/NoMatch";

import Home from "../section/Home/Home";
import About from "../section/About/About";
import Topics from "../section/Login/Login";
import News from "../section/Home/News";

const methods = {
    componentWillMount(props) {
    }
}


const App = ({state, dispatch}) =>
    <BrowserRouter>
        <div>

            {/*<Sticky stickyStyle={ {zIndex: 10000} }>*/}
            <Menu/>
            {/*</Sticky>*/}

            <Container fluid={true}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/news/:id" component={News}/>

                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Topics}/>
                    <Route component={NoMatch}/>
                </Switch>
            </Container>

        </div>
    </BrowserRouter>

export default connector(lifecycle(methods)(App));
