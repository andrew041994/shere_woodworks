import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  root: {
    '& > *': {
      // flexGrow: 1, 
      margin:2,
      width: '25ch',
      align: 'center',
    },
  },
});

class Contact extends Component {
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
  const {classes} = this.props;
  return (
    <div >
      <Box  display="flex"
  justifyContent="center"
  alignItems="center">
    <form className={classes.root} >
      <TextField  id="filled-basic" label="Filled" variant="filled"  InputProps={{style: {background: '#f8f9fa'}}}/>
      <TextField id="filled-basic" label="Filled" variant="filled"  InputProps={{style: {background: '#f8f9fa'}}}/>
      <TextField id="filled-basic" label="Filled" variant="filled"  InputProps={{style: {background: '#f8f9fa'}}}/><br/>
      <TextareaAutosize aria-label="empty textarea" placeholder="Empty" rowsMin={6} style={{ width: "100%", alignSelf: 'center'}}/>
      
    </form>

      </Box>
     
      
    </div>
  );
}
}
export default withStyles(styles)(Contact)