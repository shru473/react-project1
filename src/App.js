import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
// import { COURSES } from './shared/courses';
import Greet from './components/greet';
import { COURSES } from './shared/courses';

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			courses: COURSES
		};
	}
	
	render(){
		return (
			<div className='App'>
				<Navbar color="primary">
					<div className="container" id="brand">
						<NavbarBrand>Incredible India</NavbarBrand>
					</div>
				</Navbar>
				<Greet />
				<h1>welcome</h1>
				<Menu courses={this.state.courses} />
			</div>
		);
	}
}

export default App;