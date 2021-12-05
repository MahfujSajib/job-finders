import React from 'react';
import AboutUS from '../AboutUS/AboutUS';
import Feedback from '../FeedBack/Feedback';
import FindJobs from '../FindJobs/FindJobs';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Pricing from '../Pricing/Pricing';
const Homepage = () => {
    return (
        <div>
            <AboutUS></AboutUS>
            <FindJobs></FindJobs>
            <Feedback></Feedback>
            <Pricing></Pricing>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;