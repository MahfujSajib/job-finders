import React from 'react';
import { Card } from 'react-bootstrap';

const Candidate = (props) => {
    const { name, skill, location, hourly } = props.candidate;
    return (
        <div style={{ width: '18rem', backgroundColor: "#181628", border: "1px solid white" }} className='about-card available-jobs'>
            <Card.Body>
                <Card.Title>Name: {name}</Card.Title>
                <Card.Text>
                    Skill: {skill}
                </Card.Text>
                <Card.Text>
                    Location;{location}
                </Card.Text>
                <Card.Text>
                    <i class="fas fa-money-check-alt">{hourly}</i>

                </Card.Text>
            </Card.Body>
            <div>
                <button className='btn'>See Profile</button>
            </div>
        </div>
    );
};

export default Candidate;