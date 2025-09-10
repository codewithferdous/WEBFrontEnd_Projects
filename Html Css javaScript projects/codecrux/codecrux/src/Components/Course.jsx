import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'F:/Project/codecrux/src/Styling/Course.css';

function Course(props) {
    return (
        <Container className="course-container">
        <Card className="border-0">
            <Card.Body>
                <Card.Title className="text-center">{props.name}</Card.Title>
                <Card.Text className='txt'>{props.data}</Card.Text>
                <Link to="/TopicPage" className="btn-link">
                    Topics & Details
                </Link>
            </Card.Body>
        </Card>
    </Container>
    );
}

export default Course;
