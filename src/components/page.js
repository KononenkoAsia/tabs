import React, { useState} from 'react';
import Tab from './tabs';
import Content from './content';

const Page = (props) => {

	const [id, setId] = useState(0);

	const handleClick = clickedId => setId(clickedId);

	const post = () => {
		return props.tabs.map((tabs)=> {
			return(
				<Tab 
					label={tabs.text} 
					onClick={()=>handleClick(tabs.id)}
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
