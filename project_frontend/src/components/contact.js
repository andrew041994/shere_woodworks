import React, { Component } from 'react';
import emailjs from 'emailjs-com'


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
      
    </div>
  );
}
}
