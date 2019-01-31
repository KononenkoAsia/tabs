import React from 'react';

const Content = (props) => {

	return props.content.filter((content) => {return content.id===props.id}).map((value) => {
		return(
			<div className="content" key={value.id}>
				<p>
					{value.text}
				</p>
			</div>
		);		
	});	
		
}

export default Content;
