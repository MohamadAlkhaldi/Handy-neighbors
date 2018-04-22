import React from 'react';

class MechSignedIn extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			clientName: '',
			service: '',
			date: ''
		}
		this.handleChanges = this.handleChanges.bind(this)
	}

	handleChanges(event){
		var name = event.target.name
		var value = event.target.value
		var obj = {}
		obj[name] = value
		this.setState(obj)
		console.log(this.state[name])
	}


	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit}>
	          <div className="form-group">
	            <label >Client Name:</label>
	            <input type="clientName" className="form-control" id="clientName" placeholder="Enter clientName" name="clientName" value={this.state.clientName} onChange={this.handleChanges}/>
	          </div>
	          <div className="form-group">
	            <label >Service</label>
	            <input type="service" className="form-control" id="service" placeholder="Enter service" name="service" value={this.state.service} onChange={this.handleChanges}/>
	          </div>
	          <div className="form-group">
	            <label >date</label>
	            <input type="date" className="form-control" id="date" placeholder="Enter date" name="date" value={this.state.date} onChange={this.handleChanges}/>
	          </div>
          </form>
			</div>
			)
	}

}

export default MechSignedIn;