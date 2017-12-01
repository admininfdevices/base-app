import React, { Component } from 'react';


class MainPage extends Component {

  	
	render () {
	  
		const { containerStyle } = styles;
	
		return (
			<div style={containerStyle} >
			</div>
		);
	};
};

const styles = {
	containerStyle: {
		display: 'flex',
		height: '100%',
		width: '100%',
		backgroundColor: 'grey',
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'stretch'
	}
}

export default MainPage;