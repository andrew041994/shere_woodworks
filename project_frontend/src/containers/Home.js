import React, { Component } from 'react';
import  { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";

export default class Home extends Component {



  render() {
    return (
      <div >
        <Container fluid>
         <Row className="justify-content-md-center">
          <Col md="auto"><h1>Welcome To Shere Woodworks</h1></Col>
         </Row>
         <Row className="justify-content-md-center">
          <Col  md="auto"> <h3>Mission Statement</h3></Col>
         </Row>
         <Row className="justify-content-md-center">
          <Col  md="auto"><p>some stuff about yourself/company </p></Col>
         </Row>
         <Row className="justify-content-md-center">
          <Col  md="auto"> <Link to="/contact">
          <button>Contact Us!</button>           
          </Link></Col>
         </Row>
         
        </Container>

{/*           
          

          
         
           */}



      </div>
    );
  }
}
