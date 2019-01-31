import React, { Component } from 'react';
import Tab from './tabs';

class Page extends Component {

	post = () => {
		return this.props.tabs.map((tabs)=> {
			return(
				<Tab 
					label={tabs.text} 
					key={tabs.id}
				/>				
			);
		});
	}

	render(){		
		return(
			<div className="menu">
				{this.post()}
			</div>
		);
	}	
}

export default Page;
