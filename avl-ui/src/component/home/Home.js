import React, { Component } from 'react';

import './Home.css';
class Home extends Component {

  responseGoogle = (response) => {
    console.log(response);
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

export default Home ;