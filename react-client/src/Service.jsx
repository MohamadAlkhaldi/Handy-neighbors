import React from'react';

class Service extends React.Component{
   
        render(){
            return(
                <li className="list-group-item">
                <div>
                <h4>header</h4>
                <p>this.props.service</p>
                <p>Mobile</p>
                </div>
                </li>
                )
            }
        
    }

export default Service