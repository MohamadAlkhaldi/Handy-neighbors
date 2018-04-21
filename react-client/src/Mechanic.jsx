import React from'react';

class Mechanic extends React.Component{
   
        render(){
            return(
                <li className="list-group-item">
                <div>
                <h4>{this.props.mech.username}</h4>
                <p>Distance: {this.props.mech.distance}</p>
                <p>Mobile: {this.props.mech.phonenumber}</p>
                </div>
                </li>
                )
            }
        
    }

export default Mechanic