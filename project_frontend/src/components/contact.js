import React, { Component } from 'react';
import emailjs from 'emailjs-com'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Col, Container, Row } from 'react-bootstrap';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      subject: "",
      email: "",
      message: "",
    }
    this.sendEmail = this.sendEmail.bind(this);

  }
  

sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_ngumvtj', 'template_mr6phfo', e.target, 'user_rjqNpqutQge0Nf647Xr3R')
    .then((result) => {
      console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
      this.setState({
        name: "",
      subject: "",
      email: "",
      message: ""
      })
  }

  render() {
  return (
    <div>
      <Form className="contact-form" onSubmit={this.sendEmail}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col lg="auto">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control required="required" type="text" placeholder="Please enter your full name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}/>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col lg="auto">
              <Form.Group >
                <Form.Label>Subject</Form.Label>
                <Form.Control required="required" type="text" placeholder="Subject" value={this.state.subject} onChange={(event) => this.setState({subject: event.target.value})}/>
              </Form.Group>            
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col lg="auto">
              <Form.Group controlId="formBasicEmail" >
                <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})}/>
                  <Form.Text className="text">We'll never share any of your information</Form.Text>
                
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-lg-center">
            <Col lg="3">
              <Form.Group >
                <Form.Label>Message</Form.Label>
                <Form.Control required="required" as="textarea" rows={3}  placeholder="Add your message here" value={this.state.message} onChange={(event) => this.setState({message: event.target.value})}/>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-lg-center">
            <Col lg="auto">
              <Button className="mr-2" type="submit" variant="info" > Submit </Button>           
              <Button className="mr-2" variant="info"  href="/">Home</Button> 
            </Col>
          </Row>
        </Container>
       
        

        
      </Form>
      {/* <h2 className="contact">Tell Us How We Can Bring Your Idea To Life! </h2>
      <form  >
        <input  type="text" name="name" placeholder="Name" /> <br/><br/>
        <input required="required" type="text" name="subject" placeholder="Subject" /><br/><br/>
        <input required="required" type="email" name="email" placeholder="Email"  /><br/><br/>
        <textarea required="required" type="textarea" name="message" placeholder="Message"  /><br/><br/>
        
      </form>  */}
    </div>
  );
}
}
