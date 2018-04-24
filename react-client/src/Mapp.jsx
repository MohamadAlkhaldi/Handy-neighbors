import React, { Component } from 'react';
import {Map,  Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
// import $ from 'jquery';

class Mapp extends Component {
  constructor(props){
    super(props)
    this.state = {
      lat:0,
      lng:0,
      showingInfoWindow: false,
      activeMarker: {},
      Place: {}
    }
    this.getLoc = this.getLoc.bind(this)
    // this.handleChangesLongitude = this.handleChangesLongitude.bind(this)
    // this.handleChangesLaltitude = this.handleChangesLaltitude.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)

  }

  // handleChangesLongitude(event) {
  //   this.setState({lng: event.target.value})
  //   console.log(this.state.lng)
    
  // }

  // handleChangesLaltitude(event) {
  //   this.setState({lat: event.target.value})
  //   console.log(this.state.lat)
    
  // }

  // handleSubmit(event) {
  //   $.ajax({
  //     type : 'POST',
  //     url: '/',
  //     data: {
      
  //       longitude: this.state.lng,
  //       laltitude: this.state.lat

  //     }, 
  //     success: (data) => {
  //       this.props.setMech(data)
  //       console.log('success', data)
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  //   event.preventDefault();
  // }

getLoc(){
  var that = this
  var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
function success(pos) {
  var crd = pos.coords;

that.setState({
  lat:crd.latitude,
  lng:crd.longitude
})

that.props.setLngLat(crd.longitude, crd.latitude)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
}
onMarkerClick(props, marker, e){
    this.setState({
      Place: props,
      activeMarker: marker,
      showingInfoWindow: true
    })};
 
  onMapClicked (props){
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  render() {
    return (
        <div> 
        
          <div>
          {this.getLoc()}   

            <Map style={{width:"60%",height:"30%"}} google={this.props.google} zoom={7}
                initialCenter={{  lat:31.963158 ,lng:35.930359}}>

                <Marker position={{lat:this.props.laltitude,lng:this.props.longitude}}
                  onClick={this.onMarkerClick} name={"RBK's House"}
                   />
               

                <InfoWindow marker={this.state.activeMarker}      
                  visible={this.state.showingInfoWindow}> 

                <div>
                  <h1>{this.state.Place.name}</h1>
                </div>

              </InfoWindow>

            </Map>
            </div>
            
        </div>          
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCFIu_B06HtwnTyK0tIbbJmlYuVBkIIUSw")
})(Mapp)


// fcsda<div>
//              <form onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                   <label>Location:</label>
//                   <input className="form-control" id="longitude" placeholder="longitude" name="longitude" value={this.state.lng} onChange={this.handleChangesLongitude}/>
//                   <input className="form-control" id="laltitude" placeholder="laltitude" name="laltitude" value={this.state.lat} onChange={this.handleChangesLaltitude}/>
//                 </div>
//                 <button type="submit" className="btn btn-warning btn-block" style={{color:'black', marginBottom:'10px'}}>Submit</button>
//               </form>
//               </div> 