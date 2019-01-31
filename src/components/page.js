import React, { Component } from 'react';
import Tab from './tabs';
import Content from './content';

class Page extends Component {

	constructor(props) {
		super(props);
		this.state={
			id: 0
		}
	}

	handleClick(event) {
		this.setState({
			id:event
		})
	}

	post = () => {
		return this.props.tabs.map((tabs)=> {
			return(
				<Tab 
					label={tabs.text} 
					key={tabs.id}
					onClick={() => this.handleClick(tabs.id)}
					id = {this.state.id}
				/>				
			);
		});
	}

	render(){		
		return(
			<div>
				<div className="menu">
					{this.post()}
				</div>
				<Content id={this.state.id} content={this.props.content} />
			</div>
		);
	}	
}

export default Page;
