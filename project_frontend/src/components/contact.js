import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { withStyles } from '@material-ui/styles'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

 
const styles = theme => ({
  root: {
    '& > *': {
      // flexGrow: 1, 
      margin:2,
      width: '55ch',
      align: 'center',
      background: 'transparent'
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

        <Box  display="flex" justifyContent="center" alignItems="center">
          <form className={classes.root} onSubmit={this.sendEmail}>
            <span >
            <h3 style={{color:'#f8f9fa', fontWeight: 'bold'} }>Tell us about your idea!</h3>
            </span>
        
            <ValidatorForm ref="form">
              <TextField  id="filled-basic" onChange={(event) => {this.setState({name: event.target.value})}} label="Full Name" variant="filled"  InputProps={{style: {background: '#b5b8ba'}}} style={{ width: "100%"}}/> <br/><br/>

              <TextField id="filled-basic" onChange={(event) => {this.setState({subject: event.target.value})}} label="Subject" variant="filled"  InputProps={{style: {background: '#b5b8ba'}}} style={{ width: "100%"}}/><br/><br/>
            
              <TextValidator label="Email" 
              onChange={(event) => {this.setState({email: event.target.value})}}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
                style={{ width: "100%", background: '#b5b8ba'}} 
                /><br/>

              <TextareaAutosize aria-label="empty textarea" placeholder="Empty" rowsMin={6} style={{ width: "100%",background: '#b5b8ba' }}/> 
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{width: '30%'}}
                endIcon={<SendIcon/>}
              >
                Send
              </Button>   
            </ValidatorForm>
          </form>
        </Box>
     
      
    </div>
  );
}
}
export default withStyles(styles)(Contact)

