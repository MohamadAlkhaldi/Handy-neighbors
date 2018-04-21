import React from'react';
import Mechanic from './Mechanic.jsx'

class MechList extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //     testList:[{
        //             username: 'Mohamad',
        //             phonenumber: +9626466464,
        //             distance: "1km"
        //     },
        //     {
        //             username: 'Hasan',
        //             phonenumber: +9626466464,
        //             distance: "1.3km"
        //     }, 
        //     {
        //             username: 'Saqr',
        //             phonenumber: +9626466464,
        //             distance: "2km"
        //     }]
        // }
    }
        render(){

            return(
                <div style={{border:'solid', 'borderRadius': '15px'}}>
                <ul style={{backgrondColor: '#E44F4F'}} className="list-group">
                {this.props.mechs.map((mech)=><Mechanic mech={mech} key={'d'+mech.username}/>)}
                </ul>
                </div>
                )
            }
        
    }

export default MechList