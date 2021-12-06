import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div class="footer overflow-hidden">
            <div class="row gx-5">
                <div class="col-lg-4 col-sm-12">
                    <div>
                        <h3 className='brandname'>JOB FINDERS.</h3>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div>
                        <h3 className='socialmedia'>Find Us On Social Media</h3>
                        <div>
                            <a href="https://www.linkedin.com/in/mahfuj-khan-sajib/" target="_blank">
                                <i class="fab fa-linkedin icon" ></i>
                            </a>
                            <a href="/" target="_blank"><i class="fab fa-facebook icon"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div className='m-2'>
                        <h3 className='contact'>Contact us</h3>
                        <hr style={{ color: "white" }} />
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label" style={{ color: "white" }}>Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="write your email" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" style={{ color: "white" }}>Your Comments</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write you comments'></textarea>
                        </div>
                        <button className='btn'>Submit</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;