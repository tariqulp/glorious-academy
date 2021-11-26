import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import img1 from '../../assests/images/first.jpg'
import img2 from '../../assests/images/second.jpg'
import img3 from '../../assests/images/third.jpg'
import ShowData from '../ShowData/ShowData';

const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./course.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div>
            {/* extra section Carousel */}
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"

                        />
                        <Carousel.Caption>
                            <h1>Learn English From Us</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>Around 100 courses are here</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>Our Achievement</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* Four data show container */}
            <div className="container">

                <Row xs={1} md={4} className="g-4" style={{ margin: '20px' }}>
                    {
                        courses.slice(0, 4).map(course => <ShowData key={course.courseCode} course={course}></ShowData>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;