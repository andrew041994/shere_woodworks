import React, { Component } from 'react';

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            address: "",
            email: "",
            password: "",
            confirmPassword: ""

        }

    }
  render() {
    return (
      <div> 
          <h1>Sign-Up</h1>
          <form>
              <input type="text" placeholder="First Name" name="firstName" 
              value={this.state.firstName} onChange={(event) => {this.setState({firstName: event.target.value})}} /><br/><br/>
              <input type="text" placeholder="Last Name" name="lastName" 
              value={this.state.lastName} onChange={(event) => {this.setState({lastName: event.target.value})}} /><br/><br/>
              <input type="text" placeholder="Username" name="username" 
              value={this.state.userName} onChange={(event) => {this.setState({userName: event.target.value})}} /><br/><br/>
              <input type="text" placeholder="Address" name="address" 
              value={this.state.address} onChange={(event) => {this.setState({address: event.target.value})}} /><br/><br/>
              <input type="email" placeholder="Email" name="email"
              value={this.state.email} onChange={(event) => {this.setState({email: event.target.value})}}/>


          </form>
          
     </div>
    );
  }
}
