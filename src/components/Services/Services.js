import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowData from '../ShowData/ShowData';

const Services = (props) => {
    // data fetching
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./course.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        // show all data in Services
        <div className="container">

            <Row xs={1} md={4} className="g-4" style={{ margin: '20px' }}>
                {
                    courses.map(course => <ShowData key={course.courseCode} course={course}></ShowData>)
                }
            </Row>
        </div>
    );
};

export default Services;