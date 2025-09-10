import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'F:/Project/codecrux/src/Styling/TopicNames.css';

function TopicNames(props) {
    return (
        <Container className="course-cont">
            <Card className="border-0 flex-grow-1">
                <Card.Body className="d-flex justify-content-between align-items-center">
                    <Card.Title className="txt">{props.no + "  :  " + props.name}</Card.Title>
                    <Link to="/QuestionsPage" className="btn-link">
                        Practice Questions
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default TopicNames;
