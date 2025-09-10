import React from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import HomePageHeader from 'F:/Project/codecrux/src/Components/HomePageHeader';
import 'F:/Project/codecrux/src/Styling/InitialComCss.css';
function InitialCom() {
  const date = new Date().getFullYear();
  return (
    <Container  className="outer">
      <HomePageHeader />
      <Row className="initailPageData">
        <Col className="text-content">
          <h1>A New Way to Learn Coding</h1>
          <p>Code Crux is the top platform for enhancing your coding skills.</p>
          <div className="buttonsItems">
            <Button as={Link} to='/SignUp' className="button">Create Account</Button>
            <Button as={Link} to='/SignIn' className="button">Sign In</Button>
          </div>
        </Col>
      </Row>
      <footer className="mt-4">
        <p>© {date} CodeCrux. All Rights Reserved. Privacy Policy | Terms of Service</p>
      </footer>
    </Container>
  );
}

export default InitialCom;
