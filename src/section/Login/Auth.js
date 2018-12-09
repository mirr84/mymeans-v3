import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";

import LoadingOverlay from "react-loading-overlay";
import {Button, Col, Container, Form, FormGroup, Input, Label} from "reactstrap";

const methods = {
    componentWillMount(props) {
        console.log('init Auth');
    }
}

const Auth = ({match}) =>
    <div>

        <LoadingOverlay
            active={false}
            spinner
            text='Loading your content...'
        >

            <Container>
                <h2>Sign In</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </Form>
            </Container>

        </LoadingOverlay>

    </div>

export default connector(lifecycle(methods)(Auth));
