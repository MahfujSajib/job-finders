import React from 'react';
import { Carousel } from 'react-bootstrap';
import './FeedBack.css';
import member1 from '../../images/member-1.png';
import member2 from '../../images/member-2.png';
import member3 from '../../images/member-3.png'

const Feedback = () => {
    return (
        <>
            <div className='mt-5'>
                <h2 className='feedback-text'>Check What Our Customers say About Us.</h2>
            </div>
            <Carousel className='mt-5'>
                <Carousel.Item interval={1000}>
                    <img
                        className="member"
                        src={member1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption'>
                        <h3>Name: Julia</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="member"
                        src={member2}
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption'>
                        <h3>Name: Julia</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="member"
                        src={member3}
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption'>
                        <h3>Name: Julia</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Feedback;