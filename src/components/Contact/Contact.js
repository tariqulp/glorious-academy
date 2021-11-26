import React from 'react';
import image1 from '../../assests/images/person1.png'
import image2 from '../../assests/images/person2.png'
import image3 from '../../assests/images/person3.png'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            {/* Contact Container */}
            <div className='contact-container container'>
                <div>
                    <img src={image1} alt="" style={{ width: '80%', height: '50%' }} />
                    <h3>Kara A.</h3>
                    <strong>iMBA Graduate, University of Illinois Gies College of Business</strong>
                    <p>"It’s a really big deal to offer an online MBA that’s a real MBA at a price that’s achievable. This program is totally disrupting higher education."</p>


                </div>
                <div>
                    <img src={image3} alt="" style={{ width: '80%', height: '50%' }} />
                    <h3>Mirela I.</h3>
                    <strong>IBM Data Science Professional Certificate Alumna</strong>
                    <p>"Recruiters saw my Professional Certificate on my LinkedIn profile. During the interview, they told me they were impressed with the skills I learned. I got the job!"</p>


                </div>
                <div>
                    <img src={image2} alt="" style={{ width: '80%', height: '50%' }} />
                    <h3>Sabrina M.</h3>
                    <strong>HR Manager, ZS Associates</strong>
                    <p>"We were looking for scale, credibility, and something we didn’t have to build in-house. Coursera not only offers training from very prestigious institutions but also a platform that allows you to do the tracking that you want."</p>


                </div>
            </div>
        </div>
    );
};

export default Contact;