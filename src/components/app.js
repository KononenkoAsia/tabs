import React from 'react';
import Page from './page';
import content from '../data/dataContent.js';
import tabs from '../data/dataTabs.js';

const App = () => {

	return(
		<Page tabs={tabs} content={content}/>
	);
}

export default App;
