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
		return <div className="container"  style={{'marginTop':'120px'}}>
		<div className="col-md-10 " >
		<a  className="col-md-6 col-md-offset-4" href="#/home" style={{textDecoration: 'none', 'borderRadius': '15px', 'border' : 'solid', 'borderColor' : 'black', borderWidth:'thick','backgroundColor' : '#E9AB17'}}>
			
			<img style={{'marginLeft':'26%'}} src="https://static.thenounproject.com/png/934800-200.png"/>
			<br/>
			<span style={{'marginLeft':'12%', 'fontSize':'40px', fontFamily:"Comic Sans MS", color:'black'}}>Your car is down!</span>
			
		</a>
		</div>

		<div className="col-md-10 "  style={{'marginTop':'30px'}}>
		<a  className="col-md-6 col-md-offset-4" href="#/signup" style={{textDecoration: 'none', 'borderRadius': '15px', 'border' : 'solid', 'borderColor' : 'black', borderWidth:'thick',  'backgroundColor' : '#E9AB17'}}>
			
			<img style={{'marginTop':'10px', 'marginLeft':'26%'}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/192296-200.png"/>
			<br/>
			<span style={{'marginLeft':'8%', 'marginTop':'10px', 'fontSize':'40px', fontFamily:"Comic Sans MS", color:'black'}}>You handy? join us!</span>
			
		</a>
		</div>
		</div>
	}

	}
// https://d30y9cdsu7xlg0.cloudfront.net/png/192296-200.png
export default Intro