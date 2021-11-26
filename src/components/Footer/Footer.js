import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'


const Footer = () => {
    const element = <FontAwesomeIcon icon={faInbox} />
    return (
        <div className="conatiner-fluid" style={{ marginTop: '50px', backgroundColor: 'black', paddingTop: '100px', color: 'grey' }}>
            <h3>Newsletter</h3>

            <Stack direction="horizontal" gap={3} className='w-50' style={{ marginLeft: '350px' }}>
                <Form.Control className="me-auto" placeholder="Enter your email address" />
                <Button variant="secondary">Submit</Button>
                <div className="vr" />
                <Button variant="outline-danger">Reset</Button>
            </Stack>
            <div className='navigation'>
                <div>
                    <h4>Navigation</h4>
                    <ul style={{ listStyle: 'none' }} >
                        <li >
                            <Link className='link' to='/home'>Home</Link>
                        </li>
                        <li><Link className='link' to='/about'>About</Link></li>
                        <li><Link className='link' to='/services'>Services</Link></li>
                        <li><Link className='link' to='/admission'>Admission</Link></li>
                        <li><Link className='link' to='/contact'>Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>Tweets</h4>
                    <p>{element}  "Overall, my journey has required an incredible<br /> amount of self-discipline,<br /> perseverance and fortitude."…</p>
                    <p>{element}   Which #Cambridge College is this?<br /> 📷 Photo by @camdiary</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <strong>Address</strong><p>Daffodil International University,<br />Dhanmondi 27, Dhaka</p>


                    <p>Email : info@unisco.com</p>
                    <p>Phone : +91 555 668 986</p>

                </div>
            </div>
            <footer>2021 © copyright All rights reserved.</footer>


        </div>
    )
};

export default Footer;