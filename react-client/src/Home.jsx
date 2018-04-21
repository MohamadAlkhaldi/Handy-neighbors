import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Columns from 'react-columns';
import MechList from './MechList.jsx'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: '',
      laltitude: ''
    }
    //this.handleChangesU = this.handleChangesU.bind(this);
   this.handleChangesLongitude = this.handleChangesLongitude.bind(this)
   this.handleChangesLaltitude = this.handleChangesLaltitude.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)

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
      url: '/',
      data: {
      
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
    function Component(){
      var dimensions = [
        { width:800, height: 1200 },
        { width: 800, height: 600 }]
      }

    return (<div className="container">
              <Columns>
              <div>
              <h1>Home</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Location:</label>
                  <input className="form-control" id="longitude" placeholder="longitude" name="longitude" value={this.state.longitude} onChange={this.handleChangesLongitude}/>
                  <input className="form-control" id="laltitude" placeholder="laltitude" name="laltitude" value={this.state.laltitude} onChange={this.handleChangesLaltitude}/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              </div>
              <div style={{margin: '80px'}}><MechList/></div>
              </Columns>
            </div>)
  }
}

export default Home;