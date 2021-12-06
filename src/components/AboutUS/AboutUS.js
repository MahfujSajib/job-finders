import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './AboutUS.css'

const AboutUS = () => {
    return (
        <div id='about'>
            <h2 className='mt-5 about-text'><span style={{ color: "red" }}>Why</span> Job Finders?</h2>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', backgroundColor: "#181628", border: "1px solid white" }} className='mt-5 p-5 about-card'>
                            <i class="fas fa-user-md icon"></i>
                            <Card.Body>
                                <Card.Title style={{ fontSize: "24px" }}>Find Job Easily</Card.Title>
                                <Card.Text>
                                    In Job Finders We ensure to find job easily
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', backgroundColor: "#181628", border: "1px solid white" }} className='mt-5 p-5 about-card'>
                            <i class="fas fa-chalkboard icon"></i>
                            <Card.Body>
                                <Card.Title style={{ fontSize: "24px" }}>Improve your skills</Card.Title>
                                <Card.Text>
                                    Improve your skills with Job Finders
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', backgroundColor: "#181628", border: "1px solid white" }} className='mt-5 p-5 about-card'>
                            <i class="fas fa-shield-alt icon"></i>
                            <Card.Body>
                                <Card.Title style={{ fontSize: "24px" }}>Trusted & Secure</Card.Title>
                                <Card.Text>
                                    We served more then 30 years
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUS;