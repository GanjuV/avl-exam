import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import './Welcome.css';
class Welcome extends Component {
  state={
    redirect: false
  }
  responseGoogle = (response) => {
    if(response.w3.U3) {
      this.setState({ redirect: true })
    }
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to={'/home'} />;
    }
    return (
        <div class="ui segment raised padded text container segment top-gap">
          <h1 class="ui header">Please login using google credentials</h1>
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