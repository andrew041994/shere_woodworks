import React, { Component } from 'react';
import  { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Instagram from '../components/instagram';

export default class Home extends Component {



  render() {
    const images = <Instagram/>
    return (
      <div >

        
        <Container fluid>
         <Row className="justify-content-md-center">
          <Col md="auto"><h1 className="header">Welcome To Shere Woodworks</h1></Col>
         </Row>
         <Row className="justify-content-md-center">
          <Col  md="auto"> <h3 className="mission">Mission Statement</h3></Col>
         </Row>
         <Row className="justify-content-md-center">
          <Col  md="auto"><p className="statement">some stuff about yourself/company </p><br/>
          </Col>
         </Row>
         <Row className="justify-content-md-center">
          <Col  md="auto"> 
          <Link to="/contact">
          <Button>Contact Us!</Button>           
          </Link></Col>
         </Row>
         <Row>
          <Col xs={6} md={4}>
         <Instagram/>
          </Col>
          </Row>
         
        </Container>

{/*           
          

          
         
           */}



      </div>
    );
  }
}
