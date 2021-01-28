import React from "react";
import { Route, Switch } from "react-router-dom"
import './App.css';
import Login from "./components/login";
import Signup from "./components/signup";
import Home from './containers/Home';

function App() {
  const NotFound = () => {

    return (
      <div style={{"margin": "auto",                 
      "width": "50%",
      "padding": "30px"
      }}>
            <h2>
            404 - Not Found<br/>
            <a href="/">Return Home</a>
            </h2>
            </div>
           
    )

  }
  return (
   
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Signup} exact path='/signup'/>
        <Route component={NotFound} exact path="*" />

      </Switch>

      
    
  );
}

export default App;
