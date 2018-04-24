import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Redirect} from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      redirect: false,
      username: '',
      phonenumber: +962,
      password: '',
      longitude: '',
      laltitude: ''

    }
    this.handleChangesU = this.handleChangesU.bind(this);
    this.handleChangesP = this.handleChangesP.bind(this);
    this.handleChangesPh = this.handleChangesPh.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangesLongitude = this.handleChangesLongitude.bind(this)
    this.handleChangesLaltitude = this.handleChangesLaltitude.bind(this)

  }

  handleChangesU(event) {
    this.setState({username: event.target.value})
    console.log(this.state.username)
    
  }

  handleChangesP(event) {
    this.setState({password: event.target.value})
    console.log(this.state.password)
  }

  handleChangesPh(event) {
    this.setState({phonenumber: event.target.value})
    console.log(this.state.phonenumber)
  }


  handleChangesLongitude(event) {
    this.setState({longitude: event.target.value})
    console.log(this.state.longitude)
    
  }

  handleChangesLaltitude(event) {
    this.setState({laltitude: event.target.value})
    console.log(this.state.laltitude)
    
  }

   handleSubmit(event) {
    $.ajax({
      type : 'POST',
      url: '/signup',
      data: {
        username: this.state.username,
        password: this.state.password,
        phonenumber: this.state.phonenumber,
        longitude: this.state.longitude,
        laltitude: this.state.laltitude

      }, 
      success: (data) => {
        this.setState({ redirect: true })
        console.log('success', data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    event.preventDefault();
  }


  render () {
     const { redirect } = this.state;
      if (redirect) {
       return <Redirect to='/signin'/>;
     }
    return (
      <div className="container" style={{'marginTop':'50px'}}>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label >Username:</label>
            <input className="form-control" id="username" placeholder="Enter username" name="username" value={this.state.username} onChange={this.handleChangesU}/>
          </div>
           <div className="form-group">
            <label >Phone number:</label>
            <input className="form-control" id="phoneNumber" placeholder="Enter Phone number" name="phoneNumber" value={this.state.phonenumber} onChange={this.handleChangesPh}/>
          </div> 
          <div className="form-group">
            <label >Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" value={this.state.password} onChange={this.handleChangesP}/>
          </div>
            <div className="form-group">
            <label>Location:</label>
            <input className="form-control" id="longitude" placeholder="longitude" name="longitude" value={this.state.longitude} onChange={this.handleChangesLongitude}/>
            <input className="form-control" id="laltitude" placeholder="laltitude" name="laltitude" value={this.state.laltitude} onChange={this.handleChangesLaltitude}/>
         
            </div>
          <button type="submit" className="btn btn-warning" style={{color:'black'}}>Submit</button>
        </form>
      
      </div>)
  }
}

export default Signup;
