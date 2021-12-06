import React from 'react';
import './FeedBack.css';
import member1 from '../../images/member-1.png';
import member2 from '../../images/member-2.png';
import member3 from '../../images/member-3.png'

const Feedback = () => {
    return (
        <div id='feedback'>
            <h2 style={{ marginBottom: "100px" }} className='feedback-text'>Check What Our Customers say About Us.</h2>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={member1} className='images' alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Susan</h5>
                            <p>Job Finders is the best.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={member2} className='images' alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Jack</h5>
                            <p>I found my first ever job from job Finders.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={member3} className='images' alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Morkel</h5>
                            <p>Get a job from Job Finders.Thats a great Site.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;