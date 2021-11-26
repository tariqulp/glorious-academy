import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    // active style for nav
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            {/* navbar section */}
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home">Glorious</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/services">Services</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/admission">Admission</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;