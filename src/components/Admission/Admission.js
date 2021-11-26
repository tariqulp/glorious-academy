import React from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import './Admission.css'

const Admission = () => {
    return (
        <div>
            <h1>Admission Form</h1>


            <Form className='form container'>
                <Row className="mb-3 w-50">
                    <Form.Group md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"

                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"

                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3 w-50">
                    <Form.Group md="6" controlId="validationCustom03">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group md="3" controlId="validationCustom04">
                        <Form.Label>Education</Form.Label>
                        <Form.Control type="text" placeholder="Education" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Education.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group md="3" controlId="validationCustom05">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Phone.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

            </Form>
            <Button variant="secondary">Submit</Button>
        </div>



    );
};

export default Admission;