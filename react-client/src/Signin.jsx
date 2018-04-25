import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SigninForm from './SigninForm.jsx';
import SignedIn from './SignedIn.jsx';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

//This is a component that have two children components, and it will render only one of them regarding the value of a v which will switch from false to ture when the mech sign in with the right credintials -MechSignedIn- and will get back to false -SigninForm- when he signout.

class Signin extends React.Component {
  
  render () {
    
    return(
      <div className='container' style={{'marginTop':'50px'}}>
      <div>
      {!this.props.v ? <SigninForm toggle={this.props.toggle} setUsername={this.props.setUsername} setServices={this.props.setServices}/> : null
      }
      </div>
      <div>
        {this.props.v ? <SignedIn toggle={this.props.toggle} user={this.props.username} services={this.props.services} setServices={this.props.setServices}/> : null
      }
      </div>
    </div>)
  }
}

export default Signin;