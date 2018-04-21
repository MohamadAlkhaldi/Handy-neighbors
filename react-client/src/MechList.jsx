import React from'react';
import Mechanic from './Mechanic.jsx'

class MechList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            names:['sara', 'fatima', 'amira']
        }
    }
        render(){
            return(
                <div>
                {this.state.names.map((name)=><Mechanic name={name}/>)}
                </div>
                )
            }
        
    }

export default MechList