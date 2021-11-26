import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ShowData.css'
const ShowData = (props) => {
    const { course, price, img, rating, description } = props.course;


    return (
        <div>
            {/* card for data show */}
            <Col>
                <Card className="card">
                    <Card.Img variant="top" src={img} style={{ height: '20rem' }} />
                    <Card.Body>
                        <Card.Title>{course}</Card.Title>
                        <Card.Text><strong>{price}</strong></Card.Text>
                        <Card.Text>Rating:{rating}</Card.Text>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ShowData;