import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Homepage from '../Homepage/Homepage';
import './Home.css'

const Home = () => {
    return (
        <div id='#home'>
            <Container>
                <Row className='mt-5'>
                    <Col>
                        <h1 className='hero-text'>Get Your Next Job With <span className='main-text'>Job Finders</span>.</h1>
                    </Col>
                    <Col className='main-img'>
                        <img src="../../images/screen_05.png" alt="" />
                    </Col>
                </Row>
                <h3 style={{ color: "white", marginTop: "50px" }} class="animate__animated animate__bounceInUp">Find The Best Job From Job Finders</h3>
                <div>

                    <div>
                        <button className='btn' class="animate__animated animate__bounceInUp btn">Download our app</button>
                    </div>
                </div>
            </Container>
            <Homepage></Homepage>
        </div>
    );
};

export default Home;