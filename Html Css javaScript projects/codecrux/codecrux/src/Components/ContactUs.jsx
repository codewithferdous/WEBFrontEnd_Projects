import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Footer from 'F:/Project/codecrux/src/Components/Footer';
import Header from 'F:/Project/codecrux/src/Components/Header';
import 'F:/Project/codecrux/src/Styling/ContactUs.css';

function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    console.log("Form submitted:", { fullName, email, message });
  };

  return (
    <div>
      <Header />
      <Container className="main-contact">
        <Row className="contactus justify-content-center">
          <Col md={6} className="text-center">
            {/* <img src={logo} alt="image" className="image" /> */}
          </Col>
          <Col md={6} className="contact-content">
            <h1 className="contact-heading">Feedback</h1>
            <Form className="contactform" onSubmit={handleSubmit}>
              <Form.Group controlId="Name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text"  placeholder="Enter full name" value={fullName} onChange={(e) => setFullName(e.target.value)}className="contactname"
                />
              </Form.Group>
              <Form.Group controlId="Email"> <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="E-mail address" value={email}  onChange={(e) => setEmail(e.target.value)} className="contactemail"
                />
              </Form.Group>
              <Form.Group controlId="Message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3}placeholder="Write your message for the team here." value={message}
                onChange={(e) =>setMessage(e.target.value)}
                  className="contact-msg"
                />
              </Form.Group>
              <Button className="contact-btn" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ContactUs;
