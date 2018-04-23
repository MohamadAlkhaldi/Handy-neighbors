import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Signin from './Signin.jsx';
import MechSignedIn from './MechSignedIn.jsx';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: ''

    }
    this.handleChangesU = this.handleChangesU.bind(this);
    this.handleChangesP = this.handleChangesP.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  handleChangesU(event) {
    this.props.setUsername(event.target.value)
    this.setState({username: event.target.value})
    
  }

  handleChangesP(event) {
    this.setState({password: event.target.value})
  }

   handleSubmit(event) {
    
    $.ajax({
      type : 'POST',
      url: '/signin',
      data: {
        username: this.state.username,
        password: this.state.password
      }, 
      success: (data) => {
        console.log(data)
        if(data){
          this.props.toggle()
        } else{
          console.log('wrong')
        }
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    event.preventDefault();
  }


  render () {
    return (<div className="container">
      <h1>Sign in</h1>
      <div >
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label >Username:</label>
            <input type="username" className="form-control" id="username" placeholder="Enter username" name="username" value={this.state.username} onChange={this.handleChangesU}/>
          </div>
          <div className="form-group">
            <label >Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" value={this.state.password} onChange={this.handleChangesP}/>
          </div>
          <button type="submit" className="btn btn-warning" style={{color:'black'}} >Submit</button>
        </form>
       
      </div>
    </div>)
  }
}

export default SigninForm;