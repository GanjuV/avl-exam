import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import './Welcome.css';
class Welcome extends Component {
  
  responseGoogle = (response) => {
    console.log(response);
  }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="398789350053-ic1gl83lsukfbsnna2cfeartp56iqq3a.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}

export default Welcome ;