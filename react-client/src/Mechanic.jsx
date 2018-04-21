import React from'react';

class Mechanic extends React.Component{
   
        render(){
            return(
                <div>
                <li>{this.props.name}</li>
                </div>
                )
            }
        
    }

export default Mechanic