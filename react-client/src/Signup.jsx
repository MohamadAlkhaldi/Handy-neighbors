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
      longitude: '',
      laltitude: ''

    }
    this.handleChangesU = this.handleChangesU.bind(this);
    this.handleChangesP = this.handleChangesP.bind(this);
    this.handleChangesPh = this.handleChangesPh.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleInputSkills = this.handleInputSkills.bind(this);altitude
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

  // handleInputSkills(event){
  //   var checkboxName = event.target.name
  //   // if(event.target.checked){
  //   // this.setState({skills: checkboxName})
  //   // } else 
  //   // {this.setState({skills: ''});
  //     console.log(this.state.skills)
  //   }
  //}


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
        //skills: this.state.skills,
        longitude: this.state.longitude,
        laltitude: this.state.laltitude

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
      <div className="container">
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
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      
      </div>)
  }
}

export default Signup;

// div>
//         <h1>Sign up</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div>Username 
//             <input type="text" name="username" value={this.state.username} onChange={this.handleChangesU}/>
//           </div>
//           <div>Phone number
//             <input type="text" value={this.state.phonenumber} onChange={this.handleChangesPh}/>
//           </div>
//           <div>Password 
//             <input type="password" name="password" value={this.state.password} onChange={this.handleChangesP}/></div>
          
//           <div>Location 
//             <input  type="text" name="location" value={this.state.location} onChange={this.handleChangesLocation}/>
//           </div>
//           <div>
//             <input className="btn btn-default" type="submit"/>
//           </div>
//         </form>
//       /div> 



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