import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Findjob from '../Findjob/Findjob';
import './FindJobs.css'

const FindJobs = () => {
    const [findJobs, setFindJobs] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setFindJobs(data))
    }, [])
    return (
        <>
            <Container className='findjob'>
                <Row>
                    <Col>
                        <h1 style={{ color: "white" }}>Get Your dream Job Today</h1>
                        <p style={{ color: "white" }}>Explore all the most exciting job roles based on your interests and study area </p>
                        <div className='mt-5'>
                            <input className="input" type="text" placeholder='enter location' />
                            <br />
                            <input className="input" type="text" placeholder='enter type of job' />
                            <br />
                            <button className='btn'>Search</button>
                        </div>
                    </Col>
                    <Col>
                        <img src="../../images/job-search.jpg" alt="" />
                    </Col>
                </Row>
                <h3 style={{ color: "white" }} className='mt-5'>Popular Categories</h3>
                <hr style={{ color: "white", width: "30%" }} />
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col className="row g-5">

                        {
                            findJobs.map(findJob => <Findjob findJob={findJob}></Findjob>)
                        }

                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default FindJobs;