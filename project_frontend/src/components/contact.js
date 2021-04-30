import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom';
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import SendIcon from '@material-ui/icons/Send';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

 
const styles = theme => ({
  root: {
    '& > *': {
      // flexGrow: 1, 
      margin:2,
      width: '30%',
      align: 'center',
      background: 'transparent'
    }},
    home: {
      backgroundColor: "primary",
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "primary",
        color: "#ffff"
        
    }
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
       
         
        <Box  display="flex" justifyContent="center" alignItems="center" className={classes.root}>
          <form  onSubmit={this.sendEmail}>
            <span >
            <h3 style={{color:'#f8f9fa', fontWeight: 'bold'} }>Tell us about your idea!</h3>
            </span>
        
            
              <TextField required={true} id="filled-basic" onChange={(event) => {this.setState({name: event.target.value})}} 
              label="Full Name" variant="filled"  InputProps={{style: {background: '#ffff'}}} style={{ width: "100%"}}/> <br/><br/>

              <TextField required={true} id="filled-basic" onChange={(event) => {this.setState({subject: event.target.value})}} 
              label="Subject" variant="filled"  InputProps={{style: {background: '#ffff'}}} style={{ width: "100%"}}/><br/><br/>

              <TextField type="email" required={true} id="filled-basic" onChange={(event) => {this.setState({subject: event.target.value})}} 
              label="Email" variant="filled"  InputProps={{style: {background: '#ffff'}}} style={{ width: "100%"}}/><br/><br/>


              <TextareaAutosize required={true} aria-label="Message" placeholder="Message" rowsMin={6} style={{ width: "100%",background: '#ffff' }}
              
              /> 
<Grid container spacing={.5} justify='space-between' color="#ffff">
<Button
                type="submit"
                variant="contained"
                color="primary"
                style={{width: '30%'}}
                endIcon={<SendIcon/>}
              >
                Send
              </Button>   
              <Button
              className={classes.home}
                component={Link} to="/"
            
                color="primary"
                variant="contained"
              
                style={{width: '30%'}}
                endIcon={<SendIcon/>}
              >
                Home
              </Button>   

             

</Grid>
               
            
          </form>
        </Box>
     
      
    </div>
  );
}
}
export default withStyles(styles)(Contact)

// <ValidatorForm ref="form">
{/* <TextValidator label="Email"
              
onChange={(event) => {this.setState({email: event.target.value})}}
  validators={['required', 'isEmail']}
  errorMessages={['this field is required', 'email is not valid']}
  style={{ width: "100%", background: '#b5b8ba'}} 
  /><br/>
  </ValidatorForm> */}