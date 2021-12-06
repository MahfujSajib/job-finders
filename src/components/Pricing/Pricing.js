import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Pricing.css'

const Pricing = () => {
    return (
        <>
            <div className='plan'>
                <h2>Our Plan and Pricing</h2>
            </div>
            <div class="container overflow-hidden pricing-card">
                <div class="row gy-5">
                    <div class="col-lg-4">
                        <div>
                            <Card className='card-style'>
                                <Card.Body className="cards gy-5">
                                    <Card.Title style={{ textAlign: "center" }}>Silver Plan</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Apply 10 job for free</li>
                                            <li>Get 1 Professional Resume template</li>
                                            <li>5 free Mock Interview</li>
                                        </ul>
                                    </Card.Text>
                                    <h5 style={{ textAlign: "center", marginBottom: "20px" }}>$20/month</h5>
                                    <button className='signupbtn'>Sign up</button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <Card>
                                <Card.Body className="cards gy-5">
                                    <Card.Title style={{ textAlign: "center" }}>Diamond Plan</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Apply 500 job for free</li>
                                            <li>Get 50 Professional Resume template</li>
                                            <li>100 free Mock Interview</li>
                                        </ul>
                                    </Card.Text>
                                    <h5 style={{ textAlign: "center", marginBottom: "20px" }}>$50/month</h5>
                                    <button className='signupbtn'>Sign up</button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <Card>
                                <Card.Body className="cards gy-5">
                                    <Card.Title style={{ textAlign: "center" }}>Platinum Plan</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>Apply Unlimited job for free</li>
                                            <li>Get live suggestion for make Resume</li>
                                            <li>Unlimited free Mock Interview</li>
                                        </ul>
                                    </Card.Text>
                                    <h5 style={{ textAlign: "center", marginBottom: "20px" }}>$100/year</h5>
                                    <button className='signupbtn'>Sign up</button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;
