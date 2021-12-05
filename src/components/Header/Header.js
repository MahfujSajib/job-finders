import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{ fontSize: "25px" }}>JOB FINDER</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Link as={HashLink} className='link' to="/home#home">Home</Link>
                        <Link as={HashLink} className='link' to="/home#about">About Us</Link>
                        <Link as={HashLink} className='link' to="/home#findjob">Find Job</Link>
                        <Link as={HashLink} className='link' to="/home#feedback">Feedback</Link>
                        <Link as={HashLink} className='link' to="/home#pricing">Pricing</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;