import React, { Component } from 'react';
import  { Link } from 'react-router-dom'

import Instagram from '../components/instagram';
import Navbar from '../components/Navbar';

export default class Home extends Component {



  render() {

    return (
      <div >
        <Navbar/>
        <Instagram account="sherewoodworks" numberOfMediaElements={1} discardVideos={true} />

        
       
      </div>
    );
  }
}
