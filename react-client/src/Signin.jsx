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
      //childVisible: false

    }
    //this.toggle = this.toggle.bind(this)
    this.setUsername = this.setUsername.bind(this)
  }

  // toggle(){
  //   var val = !this.state.childVisible
  //   this.setState({childVisible : val})
  // }

  setUsername(user){
    this.setState({username: user})
  }
  
  render () {
    
    return(
      <div className='container'>
      <div>
      {!this.props.v ? <SigninForm toggle={this.props.toggle} setUsername={this.setUsername}/> : null
      }
      </div>
      <div>
        {this.props.v ? <MechSignedIn toggle={this.props.toggle} user={this.state.username}/> : null
      }
      </div>
    </div>)
  }
}

export default Signin;