import React, { Component } from 'react';
import  { Link } from 'react-router-dom'

export default class Home extends Component {



  render() {
    return (
      <div >
          <h1>Welcome To Shere Woodworks</h1> <br></br>
          <h3>Mission Statement</h3>

          <p>some stuff about yourself/company </p>
          <Link to="/login">
          <button>Login</button>           
          </Link>
          
          <button>Signup</button>



      </div>
    );
  }
}
