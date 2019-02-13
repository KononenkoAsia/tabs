import React, { useState} from 'react';
import Tab from './tabs';
import Content from './content';

const Page = (props) => {

	const [id, setId] = useState(0);

	const post = () => {
		return props.tabs.map((tabs)=> {
			return(
				<Tab 
					label={tabs.text} 
					onClick={() => setId(id)}
				/>		
			);
		});
	}

		return(
			<div>
				<div className="menu">
					{post()}
				</div>
				<Content id={id} content={props.content} />
			</div>
		);	
}

export default Page;
