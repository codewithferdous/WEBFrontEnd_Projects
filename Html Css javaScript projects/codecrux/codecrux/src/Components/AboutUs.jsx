import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logo from 'F:/Project/codecrux/src/Components/2.webp';
import Footer from 'F:/Project/codecrux/src/Components/Footer';
import Header from 'F:/Project/codecrux/src/Components/Header.jsx';
import 'F:/Project/codecrux/src/Styling/AboutUs.css';

function AboutUs() {
  return (
    <div>
      <Header />
      <Container className="about-us">
        <h1>About Us</h1>
        <p className="sub-heading">CodeCrux is a leading platform...</p>
        <Row className="about-content">
          <Col md={4} className="about-logo">
            <img src={logo} alt="CodeCrux Logo" />
          </Col>
          <Col md={8} className="about-text">
            <p>
              CodeCrux is a leading platform that provides computer science resources and coding challenges for programmers.
            </p>
            <p>
              At CodeCrux, we understand the difficulties new programmers face in the early stages of their learning journey. Programming can be daunting, with numerous concepts to grasp and a plethora of problems to solve. Our mission is to simplify this journey by providing clear, concise, and engaging resources that demystify complex topics. We offer a variety of coding challenges that are designed to progressively build a learner's confidence and proficiency. Each challenge is accompanied by detailed explanations and solutions, helping users to not only solve problems but also understand the underlying principles.  CodeCrux aims to ignite a passion for coding in our users, helping them to develop strong logical thinking skills and a deep interest in the world of programming.
            </p>
            <Button className="read-more-btn">Read More</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default AboutUs;
