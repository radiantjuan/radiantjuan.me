import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, UncontrolledCollapse, Nav, NavItem, NavLink } from 'reactstrap';
import './Header.scss';
import 'animate.css';
import { MobileMenuStatus } from 'utils/contexts';

const HeaderOnScroll = (props) => {
    const mobileMenuStatus = useContext(MobileMenuStatus);
    const [isHeaderFixed, setHeaderFixed] = useState(false);

    const onScrollHander = () => {
        if (window.pageYOffset >= 100) {
            setHeaderFixed(true);
        } else if (window.pageYOffset === 0) {
            setHeaderFixed(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            onScrollHander();
        });
    }, [])

    return (
        <header>
            <Navbar className={ ((!isHeaderFixed) ? 'd-none' : '') + " header-container position-fixed animate__animated animate__fadeInDown" } expand="lg">
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

export default HeaderOnScroll;