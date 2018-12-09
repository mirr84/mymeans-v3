import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";

import {Navbar, NavbarToggler, Collapse, Nav} from "reactstrap";
import {MenuBrandLink, MenuDropdownLink, MenuLink} from "./MenuLink";

const methods = {
    componentWillMount(props) {
        console.log('init Menu');
        props.dispatch.setter('menuReducer', {});
    }
}

const Menu = ({state, dispatch}) =>

    <Navbar color="light" light expand="md">

        <MenuBrandLink to="/" label="Brand" activeOnlyWhenExact={true}/>

        <NavbarToggler onClick={ () => dispatch.setter('menuReducer', { isOpen: !state.menuReducer.isOpen }) }/>
        <Collapse isOpen={ state.menuReducer.isOpen } navbar>
            <Nav className="ml-auto" navbar>

                <MenuLink to="/" label="Home" activeOnlyWhenExact={true}/>
                <MenuLink to="/about" label="About"/>

                <MenuDropdownLink label="Sign" items={ [ {label: 'auth', to: '/login/auth'}, {label: 'reg', to: '/login/reg'}, {label: 'profile', to: '/login/profile'} ] } />
                <MenuDropdownLink label="Options" items={ [ {label: 'about', to: '/about'}, {label: '404', to: '/p2'} ] } />

            </Nav>
        </Collapse>
    </Navbar>

export default connector(lifecycle(methods)(Menu));
