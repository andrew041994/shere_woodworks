import React, { Component } from 'react';
import emailjs from 'emailjs-com'
import Button from 'react-bootstrap/Button'

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
    <div style={{ margin: "auto", width: "20%", padding: "30px" }}>
      <form className="contact-form" onSubmit={this.sendEmail}>
        <input required="required" type="text" name="name" placeholder="Name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}/> <br/><br/>
        <input required="required" type="text" name="subject" placeholder="Subject" value={this.state.subject} onChange={(event) => this.setState({subject: event.target.value})}/><br/><br/>
        <input required="required" type="email" name="email" placeholder="Email" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} /><br/><br/>
        <textarea required="required" type="textarea" name="message" placeholder="Message" value={this.state.message} onChange={(event) => this.setState({message: event.target.value})} /><br/><br/>
        <Button className="mr-2" type="submit" variant="info" > Submit </Button>           
        <Button className="mr-2" variant="info"  href="/">Home</Button> 
      </form> 
    </div>
  );
}
}
