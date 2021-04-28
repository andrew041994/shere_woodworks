import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles'


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

  useStyles = makeStyles((theme) => ({
    box:  {
      backgroundColor: "#FFF",
      "&:hover": {
          //you want this to be the same as the backgroundColor above
          backgroundColor: "#FFF"
    }}
  }))

  render() {

  return (
    <div >
      <Box 
        component="form"
        className={this.useStyles.box}
        >
          <TextField className={this.useStyles.box} id="filled-basic" label="Filled" variant="filled" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
      </Box>
      
    </div>
  );
}
}
