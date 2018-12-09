import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";

import {Link, Route, Switch} from "react-router-dom";
import {Container, Col, Row} from "reactstrap";

import Auth from "./Auth";
import Reg from "./Reg";
import Profile from "./Profile";

const methods = {
    componentWillMount(props) {
        console.log('init Topics');
    }
}

const Login = ({match, location, state, dispatch}) =>
    <div>

        <Container fluid={true}>
            <Row>
                <Col sm={2}>
                    {/*<Sticky>*/}
                        <br/>
                        <ul>
                            <li>
                                <Link to={`${match.path}/auth`}>Авторизация</Link>
                            </li>
                            <li>
                                <Link to={`${match.path}/reg`}>Регистрация</Link>
                            </li>
                            <li>
                                <Link to={`${match.path}/profile`}>Профиль</Link>
                            </li>
                        </ul>
                    {/*</Sticky>*/}
                </Col>
                <Col>
                    <Switch>
                        {/*<Route path={`${match.path}/:p1/:p2`} component={Auth}/>*/}
                        {/*<Route path={`${match.path}/:p1`} component={Reg}/>*/}
                        <Route path={`${match.path}/auth`} component={Auth}/>
                        <Route path={`${match.path}/reg`} component={Reg}/>
                        <Route path={`${match.path}/profile`} component={Profile}/>
                        <Route exact component={Auth} />
                    </Switch>
                </Col>
            </Row>
        </Container>

    </div>

export default connector(lifecycle(methods)(Login));
