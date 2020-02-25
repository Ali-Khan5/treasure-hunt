import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="pageMiddle">
    <Container>
      <h2 className="">Welcome to Our Image Recongition APP </h2>
      <Row>
        
        <Col> <Link to="/test" ><Button variant="light" style={{padding:'15px',width:'200px'}}size="lg">Test</Button></Link></Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
