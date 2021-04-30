import React, { Component } from 'react';
import Feed from "react-instagram-authless-feed"

export default class Instagram extends Component {
  render() {
    return (
      <div>
          <Feed userName="sherewoodworks" className="Feed" classNameLoading="Loading" limit="4"/>
      </div>
    );
  }
}
// ReactDOM.render(
//   <Feed userName="jamespaulmoriarty" className="Feed" classNameLoading="Loading" limit="3"/>,
//   document.getElementById('root')
// );ReactDOM.render(
//     <Feed userName="jamespaulmoriarty" className="Feed" classNameLoading="Loading" limit="3"/>,
//     document.getElementById('root')
//   );