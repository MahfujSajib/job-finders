import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar className='navigation' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{ fontSize: "25px" }}>JOB FINDERS.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ marginLeft: "auto" }}>
                            <Nav.Link as={HashLink} className='link' to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} className='link' to="/home#about">About Us</Nav.Link>
                            <Nav.Link as={HashLink} className='link' to="/home#findjob">Find Job</Nav.Link>
                            <Nav.Link as={HashLink} className='link' to="/home#company">For Company</Nav.Link>
                            <Nav.Link as={HashLink} className='link' to="/home#feedback">Feedback</Nav.Link>
                            <Nav.Link as={HashLink} className='link' to="/home#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;






