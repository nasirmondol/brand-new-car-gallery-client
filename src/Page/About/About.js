import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-primary text-center py-5'>More want to you know about us.</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://storage.pixteller.com/designs/designs-images/2020-12-21/04/rent-a-car-sale-banner-1-5fe0b5604db74.png" className="w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Let's Go With Us</h1>
                        <button className="btn btn-primary mt-5"><Link to="/details">More Details</Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;