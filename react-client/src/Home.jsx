import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MechList from './MechList.jsx'


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: '',
      lat: '',
      mechs: []
    }
   this.handleChangesLongitude = this.handleChangesLongitude.bind(this)
   this.handleChangesLaltitude = this.handleChangesLaltitude.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChangesLongitude(event) {
    this.setState({lng: event.target.value})
    console.log(this.state.lng)
    
  }

  handleChangesLaltitude(event) {
    this.setState({lat: event.target.value})
    console.log(this.state.lat)
    
  }

  handleSubmit(event) {
    $.ajax({
      type : 'POST',
      url: '/',
      data: {
      
        longitude: this.state.lng,
        laltitude: this.state.lat

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

    return (<div className="container" >
              <div className="row">
              <div className="col">
              <h1>Home</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Location:</label>
                  <input className="form-control" id="longitude" placeholder="longitude" name="longitude" value={this.state.lng} onChange={this.handleChangesLongitude}/>
                  <input className="form-control" id="laltitude" placeholder="laltitude" name="laltitude" value={this.state.lat} onChange={this.handleChangesLaltitude}/>
                </div>
                <button type="submit" className="btn btn-warning" style={{color:'black'}}>Submit</button>
              </form>
              </div>
              <div className="col" style={{margin: '80px'}}>
              <MechList mechs={this.state.mechs}/>
              </div>
              </div>
            </div>)
  }
}

export default Home;