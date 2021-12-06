import React, { useEffect, useState } from 'react';
import Candidate from './Candidate/Candidate';
import './Company.css';

const Company = () => {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        fetch('./candidateData.json')
            .then(res => res.json())
            .then(data => setCandidates(data))
    }, [])
    return (
        <div id='company' style={{ marginTop: "100px" }}>
            <h3 style={{ color: "white", textAlign: "center", marginBottom: "50px" }} className='mt-5'>Are You Looking To Hire Right Now?</h3>
            <h4 className="text mb-5">We help you to hire best passive job seekers from different sectors.</h4>
            <div class="container">
                <div class="row g-2">
                    <div class="candidate">
                        {
                            candidates.map(candidate => <Candidate candidate={candidate}></Candidate>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Company;