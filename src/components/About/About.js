import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImg from '../../assests/images/banner.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <h1>About us</h1>
            {/* About section */}
            <div className='about-container container'>
                <div>
                    <h1>Quotes</h1>
                    <p>Students do not learn much just sitting in classes listening to teachers, memorizing prepackaged assignments, and spitting out answers. They must talk about what they are learning, write reflectively about it, relate it to past experiences, and apply it to their daily lives. They must make what they learn part of themselves</p>
                    <Link className='link' to='/services'><Button variant="secondary"> Services</Button></Link>

                </div>

                {/* about image section */}
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;