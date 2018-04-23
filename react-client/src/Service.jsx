import React from'react';

class Service extends React.Component{
   
        render(){
            return(
                <li className="list-group-item">
                <div>
                <h4>{this.props.service.clientName}</h4>
                <p>{this.props.service.service}</p>
                <p>{this.props.service.date}</p>
                </div>
                </li>
                )
            }
        
    }

export default Service