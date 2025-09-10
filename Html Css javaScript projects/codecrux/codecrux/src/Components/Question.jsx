import React, { useState } from 'react';
import { Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'F:/Project/codecrux/src/Styling/Question.css';

function Question(props) {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCheckboxChange = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <Container className={`course ${isCompleted ? 'completed' : ''}`}>
            <Card className="border-0">
                <Card.Body>
                    <Card.Title className="text-center">Question: {props.no}</Card.Title>
                    <Card.Text>{props.data}</Card.Text>
                    <Form.Group className="checkbox-container">
                        <Form.Check
                            type="checkbox"
                            checked={isCompleted}
                            onChange={handleCheckboxChange}
                            label="Completed"
                            custom
                        />
                    </Form.Group>
                    <Card.Subtitle className="mb-3">Symbol Output</Card.Subtitle>
                    <Card.Text>{props.output}</Card.Text>
                    <div className="links">
                        <Link to="/Compiler" className="btn-link">Online Compiler</Link>
                        <Link to="#" className="btn-link">Solution</Link>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Question;

