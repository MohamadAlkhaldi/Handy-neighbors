import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SigninForm from './SigninForm.jsx';
import MechSignedIn from './MechSignedIn.jsx';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      services: []

    }
    //this.toggle = this.toggle.bind(this)
    // this.setUsername = this.setUsername.bind(this)
    // this.setServices = this.setServices.bind(this)
  }

  // toggle(){
  //   var val = !this.state.childVisible
  //   this.setState({childVisible : val})
  // }

  // setUsername(user){
  //   this.setState({username: user})
  // }

  // setServices(arr){
  //   this.setState({services: arr})
  // }
  
  render () {
    
    return(
      <div className='container'>
      <div>
      {!this.props.v ? <SigninForm toggle={this.props.toggle} setUsername={this.props.setUsername} setServices={this.props.setServices}/> : null
      }
      </div>
      <div>
        {this.props.v ? <MechSignedIn toggle={this.props.toggle} user={this.props.username} services={this.props.services} setServices={this.props.setServices}/> : null
      }
      </div>
    </div>)
  }
}

export default Signin;