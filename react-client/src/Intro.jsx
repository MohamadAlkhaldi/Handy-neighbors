import React from 'react';

class Intro extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			redirect: false
		}

	}

	render(){


	const { redirect } = this.state;
   if (redirect) {
     return <Redirect to='/signin'/>;
   }
		return <div className=" row"  style={{'marginTop':'150px'}}>
		<div className="col-md-6 col-md-offset-4">
		
		<a href="#/home" style={{textDecoration: 'none'}}><img src="https://static.thenounproject.com/png/934800-200.png"/><span style={{'fontSize':'50px', fontFamily:"Comic Sans MS", color:'black'}}>Your car is down!</span></a>
		
		</div>
		<div className="col-md-6 col-md-offset-4" style={{'marginTop':'150px'}}>
		
		<a href="#/signup" style={{textDecoration: 'none'}}><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/192296-200.png"/><span style={{'fontSize':'50px', fontFamily:"Comic Sans MS", color:'black'}}>You handy guy!</span></a>
		
		</div>
		</div>
	}

	}

export default Intro