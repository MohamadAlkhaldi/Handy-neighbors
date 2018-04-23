import React from'react';
import Service from './Service.jsx'

class ServicesList extends React.Component{
    constructor(props){
        super(props);
    }
        render(){

            return(
                <div style={{border:'solid', 'borderRadius': '15px', 'borderColor' : '#E9AB17'}}>
                <ul style={{backgrondColor: '#E44F4F'}} className="list-group">
                {this.props.services.map((service)=><Service service={service} />)}
                </ul>
                </div>
                )
            }
        
    }

export default ServicesList