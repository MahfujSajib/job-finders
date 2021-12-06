import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Findjob.css'

const Findjob = (props) => {
    const { jobName, available } = props.findJob
    return (

        <>
            <Card style={{ width: '18rem', backgroundColor: "#181628", border: "1px solid white" }} className='about-card available-jobs'>
                <Card.Body>
                    <Card.Title>{jobName}</Card.Title>
                    <Card.Text>
                        Available Job: {available}
                    </Card.Text>
                </Card.Body>
                <div>
                    <button className='btn'>see all</button>
                </div>
            </Card>
        </>

    );
};

export default Findjob;