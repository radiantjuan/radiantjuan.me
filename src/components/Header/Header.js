import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, UncontrolledCollapse, Nav, NavItem, NavLink } from 'reactstrap';
import { MobileMenuStatus } from 'utils/contexts';
import './Header.scss';

const Header = (props) => {
    const mobileMenuStatus = useContext(MobileMenuStatus);
    return (
        <header>
            <Navbar className="header-container" expand="lg">
                <Container>
                    <NavbarBrand href="#pablo" className="btn-link btn btn-primary" to="/" tag={Link}>
                        RCJ Works
                    </NavbarBrand>
                    <button className="navbar-toggler" id="navbarNav" type="button" onTouchStart={props.toggleClassNameNavBar}>
                        <span className="navbar-toggler-bar navbar-kebab" />
                        <span className="navbar-toggler-bar navbar-kebab" />
                        <span className="navbar-toggler-bar navbar-kebab" />
                    </button>
                    <UncontrolledCollapse navbar toggler="#navbarNav" className="justify-content-end" isOpen={mobileMenuStatus}>
                        <Nav navbar>
                            <NavItem className="active">
                                <NavLink tag={Link} to="/whoami" onClick={props.toggleClassNameNavBar}>
                                    Who Am I?<span className="sr-only">(current)</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/myprojects" onClick={props.toggleClassNameNavBar}>
                                    My Projects
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </UncontrolledCollapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;