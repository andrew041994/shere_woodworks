import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, makeStyles } from '@material-ui/core';
import 'fontsource-roboto';
import img from '../images/background1.jpeg';

const useStyles = makeStyles((theme) => ({
    title: {
       flexGrow: 1,
       
    }
}))

const Navbar = () => {
    const classes = useStyles
    
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Avatar onClick={() => window.location.reload(true)} alt="SW" src={img} />
                    <Typography  align='center' variant="h6" className={classes.title}>sherewoodworks</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;

