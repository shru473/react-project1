import React from 'react';

class Greet extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {val: "Up"};
	}
	
	
	// changeValue = () => {
	// 	this.setState(
	// 		{val: "List of Courses"}
	// 		);
	//	}
	
	render(){
		return(
			<div>
				<h1>Hello {this.state.val}Master's</h1>
				{/* <button type="button" onClick={this.changeValue}>Change value</button> */}
			</div>
		);
	}
}


export default Greet;