import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

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
		return (
		<div className="container-fluid "  style={{'marginTop':'120px'}}>
		
		<Grid>
		 <Row className="show-grid">
		    <Col md={6} mdPush={0}>
			    <a href="#/home" style={{textDecoration: 'none'}}>
					<div style={{textDecoration: 'none', 'borderRadius': '15px', 'border' : 'solid', 'borderColor' : 'black', borderWidth:'thick','backgroundColor' : '#E9AB17'}}>
						
						
							<img style={{'marginLeft':'26%'}} src="https://static.thenounproject.com/png/934800-200.png"/>
							<br/>
							<span style={{'marginLeft':'12%', 'fontSize':'40px', fontFamily:"Comic Sans MS", color:'black'}}>Your car is down!</span>
						
						
					</div>
				</a>
			</Col>
			<Col md={6} mdPush={0}>
				<a   href="#/signup" style={{textDecoration: 'none'}}>
					<div  style={{textDecoration: 'none', 'borderRadius': '15px', 'border' : 'solid', 'borderColor' : 'black', borderWidth:'thick',  'backgroundColor' : '#E9AB17'}}>
					
						
						<img style={{'marginTop':'10px', 'marginLeft':'26%'}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/192296-200.png"/>
						<br/>
						<span style={{'marginLeft':'8%', 'marginTop':'10px', 'fontSize':'40px', fontFamily:"Comic Sans MS", color:'black'}}>You handy? join us!</span>
						
					
					</div>
				</a>
			</Col>
		</Row>
		</Grid>;
		</div>
		
		)
	}

	}
// https://d30y9cdsu7xlg0.cloudfront.net/png/192296-200.png
export default Intro