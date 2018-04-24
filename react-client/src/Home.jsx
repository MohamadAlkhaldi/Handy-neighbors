import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Columns from 'react-columns';
import MechList from './MechList.jsx'
import Mapp from './Mapp.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // longitude: 0,
      // laltitude: 0,
      mechs: []
    }
   // this.handleChangesLongitude = this.handleChangesLongitude.bind(this)
   // this.handleChangesLaltitude = this.handleChangesLaltitude.bind(this)
   // this.handleSubmit = this.handleSubmit.bind(this)
   this.setMech = this.setMech.bind(this)

  }

  // handleChangesLongitude(event) {
  //   this.setState({longitude: event.target.value})
  //   console.log(this.state.longitude)
    
  // }

  // handleChangesLaltitude(event) {
  //   this.setState({laltitude: event.target.value})
  //   console.log(this.state.laltitude)
    
  // }

  setMech(mechs){
    this.setState({mechs: mechs})
  }

  // handleSubmit(event) {
  //   $.ajax({
  //     type : 'POST',
  //     url: '/',
  //     data: {
      
  //       longitude: this.state.longitude,
  //       laltitude: this.state.laltitude

  //     }, 
  //     success: (data) => {
  //       this.setState({mechs : data})
  //       console.log('success', data)
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  //   event.preventDefault();
  // }

  render () {
   
      // const back = {
      //   backgroundImage : `url(${img})`
      // }
      

    return (<div className="container" style={{'marginTop':'50px'}}>
            <div>
              <div>
              <h1>Home</h1>
              <div >
              <Mapp setMech={this.setMech}/>
              </div>
              </div>
              <div style={{margin: '80px', paddingTop:'25%'}}>
              <MechList mechs={this.state.mechs}/>
              </div>
              </div>
            </div>)
  }
}

// sa<form onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                   <label>Location:</label>
//                   <input className="form-control" id="longitude" placeholder="longitude" name="longitude" value={this.state.longitude} onChange={this.handleChangesLongitude}/>
//                   <input className="form-control" id="laltitude" placeholder="laltitude" name="laltitude" value={this.state.laltitude} onChange={this.handleChangesLaltitude}/>
//                 </div>
//                 <button type="submit" className="btn btn-warning" style={{color:'black'}}>Submit</button>
//               </form>

export default Home;