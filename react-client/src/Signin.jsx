import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Signin extends React.Component {
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

  // componentDidMount() {
  // }

  handleChangesU(event) {
    this.setState({username: event.target.value})
    console.log(this.state.username)
    
  }

  handleChangesP(event) {
    this.setState({password: event.target.value})
    //console.log(this.state.password)
  }

   handleSubmit(event) {
    // this.state.username  this.state.password
    // $.ajax({
    //   type : 'POST',
    //   url: '/',
    //   data: {
    //     username: this.state.username,
    //     password: this.state.password
    //   }, 
    //   success: (data) => {
    //     console.log('success', data)
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
    // event.preventDefault();
  }


  render () {
    return (<div>
      <h1>Sign in</h1>
      <form onSubmit={this.handleSubmit}>
        <div>Username <input type="text" value={this.state.username} onChange={this.handleChangesU}/></div>
        <div>Password <input type="password" value={this.state.password} onChange={this.handleChangesP}/></div>
        <div><input type="submit"/></div>
      </form>
    </div>)
  }
}

export default Signin;