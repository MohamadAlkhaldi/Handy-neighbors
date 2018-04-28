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
		<div style={{'marginTop':'120px'}}>
		
		<Grid >
		 <Row className="show-grid">
		    <Col md={6}>
			    <a  href="#/home" style={{textDecoration: 'none'}}>
							<img style={{'borderRadius': '15px', 'border' : 'solid', 'borderColor' : 'black', borderWidth:'thick'}} src="http://i65.tinypic.com/2jfyx5g.jpg" height="100%" width="100%"/>
				</a>
			</Col>
			<Col md={6}>
				<a   href="#/signup" style={{textDecoration: 'none'}}>
					<img style={{'borderRadius': '15px', 'border' : 'solid', 'borderColor' : 'black', borderWidth:'thick'}} src="http://i65.tinypic.com/35alwr9.jpg" height="100%" width="100%"/>
				</a>
			</Col>
		</Row>
		</Grid>
		</div>
		
		)
	}

	}
export default Intro