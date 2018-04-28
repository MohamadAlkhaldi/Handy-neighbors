import React from'react';
// import $ from 'jquery';

class Mechanic extends React.Component{
   
        render(){
            return(
                <li className="list-group-item">
                <a href={'mailto:'+ this.props.mech.email + '?Subject=I%20need%20help!%20-%20Handy%20Neighbors&body=Longitude:%20'+this.props.longitude+'%0D%0ALaltitude:%20'+this.props.laltitude} style={{textDecoration: 'none', color:'black'}} target="_top">
                <div>
                <h4>{this.props.mech.username}</h4>
                <p>Distance: {this.props.mech.distance} km</p>
                <p>Mobile: {this.props.mech.phonenumber}</p>
                </div>
                </a>
                </li>
                )
            }
        
    }

export default Mechanic