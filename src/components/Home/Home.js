import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Homepage from '../Homepage/Homepage';
import './Home.css';
import image from '../../images/screen_05.png'
import image2 from '../../images/screen_06.png'

const Home = () => {
    return (
        <div id='#home'>
            <Container>
                <Row className='mt-5'>
                    <Col>
                        <h1 className='hero-text'>Get Your Next Job With <span className='main-text'>Job Finders</span>.</h1>
                    </Col>
                    <Col className='main-img'>
                        <img className='img' src={image} alt="" />
                        <img className='img2' src={image2} alt="" />
                    </Col>
                </Row>
                <h3 style={{ color: "white", marginTop: "50px" }} class="animate__animated animate__bounceInUp">Find The Best Job From Job Finders</h3>
                <div>

                    <div>
                        <button className='btn' class="animate__animated animate__bounceInUp btn"><a href="https://www.linkedin.com/in/mahfuj-khan-sajib/">Download our app</a></button>
                    </div>
                </div>
            </Container>
            <Homepage></Homepage>
        </div>
    );
};

export default Home;