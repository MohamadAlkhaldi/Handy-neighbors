import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';



class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      phonenumber: +962,
      // skills : '',
      password: '',
      location: ''

    }
    this.handleChangesU = this.handleChangesU.bind(this);
    this.handleChangesP = this.handleChangesP.bind(this);
    this.handleChangesPh = this.handleChangesPh.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleInputSkills = this.handleInputSkills.bind(this);
    this.handleChangesLocation = this.handleChangesLocation.bind(this)
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

  // handleInputSkills(event){
  //   var checkboxName = event.target.name
  //   // if(event.target.checked){
  //   // this.setState({skills: checkboxName})
  //   // } else 
  //   // {this.setState({skills: ''});
  //     console.log(this.state.skills)
  //   }
  //}


  handleChangesLocation(event) {
    this.setState({location: event.target.value})
    console.log(this.state.location)
    
  }

   handleSubmit(event) {
    $.ajax({
      type : 'POST',
      url: '/signup',
      data: {
        username: this.state.username,
        password: this.state.password,
        phonenumber: this.state.phonenumber,
        //skills: this.state.skills,
        location: this.state.location

      }, 
      success: (data) => {
        console.log('success', data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    event.preventDefault();
  }


  render () {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <div>Username 
            <input type="text" name="username" value={this.state.username} onChange={this.handleChangesU}/>
          </div>
          <div>Phone number
            <input type="text" value={this.state.phonenumber} onChange={this.handleChangesPh}/>
          </div>
          <div>Password 
            <input type="password" name="password" value={this.state.password} onChange={this.handleChangesP}/></div>
          
          <div>Location 
            <input  type="text" name="location" value={this.state.location} onChange={this.handleChangesLocation}/>
          </div>
          <div>
            <input className="btn btn-default" type="submit"/>
          </div>
        </form>
      </div>)
  }
}

export default Signup;


          //   Skills: plumper
          //   <div><input
          //     name="plumper"
          //     type="checkbox"
          //     //checked={this.state.skills.plumper}
          //     onChange={this.handleInputSkills} /></div>
          //   carpentr 
          //     <div><input
          //     name="carpentr"
          //     type="checkbox"
          //     //checked={this.state.skills.carpentr}
          //     onChange={this.handleInputSkills} /></div>
          // </div>