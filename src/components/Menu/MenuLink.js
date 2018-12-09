import React from 'react';
import {Route, Link} from "react-router-dom";

import {DropdownMenu, DropdownToggle, NavItem, UncontrolledDropdown} from "reactstrap";

const MyLink = ({label, to, activeOnlyWhenExact, className}) =>
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({match}) => (
            <Link
                className={className}
                to={to}>
                {label}
            </Link>
        )}
    />

export const MenuLink = ({label, to, activeOnlyWhenExact}) =>
    <NavItem>
        <MyLink className={'nav-link'}
                label={label}
                to={to}
                activeOnlyWhenExact={activeOnlyWhenExact}/>
    </NavItem>

export const MenuBrandLink = ({label, to, activeOnlyWhenExact}) =>
    <MyLink className={'navbar-brand'}
            label={label}
            to={to}
            activeOnlyWhenExact={activeOnlyWhenExact}/>

export const MenuDropdownLink = ({label, items}) =>
    <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            {label}
        </DropdownToggle>
        <DropdownMenu right>
            {
                items.map((item, idx) =>
                    <MyLink key={idx} className={'dropdown-item'} label={item.label} to={item.to} />
                 )
            }
        </DropdownMenu>
    </UncontrolledDropdown>