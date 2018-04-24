import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Columns from 'react-columns';
import MechList from './MechList.jsx'
// import Mapp from './Mapp.jsx';
import OurMap from './OurMap.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 0,
      laltitude: 0,
      mechs: []
    }
   this.handleChangesLongitude = this.handleChangesLongitude.bind(this)
   this.handleChangesLaltitude = this.handleChangesLaltitude.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
   this.setMech = this.setMech.bind(this)
   this.setLngLat = this.setLngLat.bind(this);

  }

  setLngLat(lng, lat){
      this.setState({longitude: lng,
                     laltitude: lat})
  }

  handleChangesLongitude(event) {
    this.setState({longitude: event.target.value})
    console.log(this.state.longitude)
    
  }

  handleChangesLaltitude(event) {
    this.setState({laltitude: event.target.value})
    console.log(this.state.laltitude)
    
  }

  setMech(mechs){
    this.setState({mechs: mechs})
  }

  handleSubmit(event) {
    $.ajax({
      type : 'POST',
      url: '/',
      data: {
      
        longitude: this.state.longitude,
        laltitude: this.state.laltitude

      }, 
      success: (data) => {
        this.setState({mechs : data})
        console.log('success', data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    event.preventDefault();
  }

  render () {
   
    

    return (<div className="container" style={{'marginTop':'50px'}}>
            <div>
              <div>
              <h1>Home</h1>
              <div >
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Location:</label>
                  <input className="form-control" id="longitude" placeholder="longitude" name="longitude" value={this.state.longitude} onChange={this.handleChangesLongitude}/>
                  <input className="form-control" id="laltitude" placeholder="laltitude" name="laltitude" value={this.state.laltitude} onChange={this.handleChangesLaltitude}/>
                </div>
                <button type="submit" className="btn btn-warning btn-block btn-lg" style={{color:'black', marginBottom: '10px'}}>Submit</button>
              </form>
              </div>
              <OurMap setLngLat={this.setLngLat} longitude={this.state.longitude} laltitude={this.state.laltitude}/>
              </div>
              <div style={{margin: '80px', paddingTop:'25%'}}>
              <MechList mechs={this.state.mechs}/>
              </div>
              </div>
            </div>)
  }
}



export default Home;