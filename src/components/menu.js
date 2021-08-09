import React from 'react';
import { Media } from 'reactstrap';
import './media.css';

class Menu extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {};
	}
	
	render(){
		
		const menu = this.props.courses.map((course) => {
			return(
				<div key={course.id} id="unit" className="col-12 mt-5">					
					<Media tag="li">
						<Media left>
							<Media object src={course.image} alt={course.name} />
						</Media>
						<Media body className="ml-3">
							<Media heading><strong>{course.name}</strong></Media>
							<div><strong>Course description - </strong>{course.category}</div>
							<div><strong>Info - </strong>{course.description}</div>
							<div>Info source - {course.source}</div>
						</Media>
					</Media>
				</div>
			);
		});
		
		return(
			<div className="container">
				<div className="row">
					<Media list>
						{menu}
					</Media>
				</div>
			</div>
		);
	}
}

// 'Keys' - It helps identify which items have changed, are added or removed.


export default Menu;