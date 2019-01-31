import React from 'react';

const Tab = (props) => {
	
	return(
		<div className="tab" onClick={props.onClick}>
			{props.label}
		</div>	
	);
}

export default Tab;
