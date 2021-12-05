import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Findjob.css'

const Findjob = (props) => {
    const { jobName, available } = props.findJob
    return (


        <>
            <div>
                <Card.Body>
                    <Card.Title>{jobName}</Card.Title>
                    <Card.Text>
                        Available Job: {available}
                    </Card.Text>
                </Card.Body>
            </div>
            <div>
                <button className='btn'>see all</button>
            </div>
        </>


    );
};

export default Findjob;