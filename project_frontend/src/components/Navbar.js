import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Avatar} from '@material-ui/core';
import 'fontsource-roboto';
import img from '../images/background1.jpeg';
import InstagramIcon from '@material-ui/icons/Instagram';
import  { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Contact from './contact';

const useStyles = makeStyles({
    title: {
       flexGrow: .9,
       align: 'center',
       color:"inherit"
    },
    insta: {
        alignItems: 'right',
        color:"inherit",
       
        width: '40px',
        height: '40px',
        

    },
    logoStyle: {
      
        width: '68px',
        height: '68px'
      },

      color: {
        color:"inherit"
      },

      button: {
        backgroundColor: "primary",
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "primary",
        color: "#ffff"
        
    }}



})

// https://www.instagram.com/sherewoodworks/

const Navbar = () => {
    const classes = useStyles()
    
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    
                    <IconButton  >
                        <Avatar onClick={() => window.location.reload(true)} className={classes.logoStyle} alt="SW" src={img} />
                    </IconButton>

                    <IconButton className={classes.title}>
                        <Typography  onClick={() => window.location.reload(true)} variant="h4"   >Shere Woodworks</Typography>
                    </IconButton>
                    

                    <IconButton className={classes.color} >
                        <InstagramIcon onClick={() => window.open("https://www.instagram.com/sherewoodworks/")} className={classes.insta} />
                    </IconButton>
                    <Button variant="contained" className={classes.button} color="primary" component={Link} to="/contact">
         Contact Us!                            
        </Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;

