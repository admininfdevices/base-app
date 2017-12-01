import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Header extends Component {

	NameWithIcon = () => {
		return(
			<div style= {{ display: 'flex', flexDirection: 'row', paddingLeft: 25, paddingRight: 10 }} >
				<img src='http://localhost:3000/data/icons/ManPhoto.jpg' style={{ height: 20, width: 20, borderRadius: '50%', }}/>
				<div style={{ display: 'flex', width: 140, color: '#eeeeee', fontSize: 10, fontFamily: 'roboto', alignItems: 'center', paddingLeft: 10 }}>
					Jack Sparrow
				</div>
			</div>
		)
	}

  render () {
	const {
	  headerStyle,
	  navigationStyle,
	  menuItemStyle,
	  titleItemStyle,
	  itemTextStyle,
	  activeItemStyle
	} = styles; 

	const NameWithIcon = this.NameWithIcon
	
	
  return (
    <div style={{ disply: 'flex', flex: 1, height: '100%', width: '100%', flexDirection: 'column' }} >
      <div style={headerStyle} >
		<div style={{ display: 'flex', flex: '0.2', flexDirection: 'rows' }} >
			<img src='http://localhost:3000/data/icons/HamburgerIcon.png' style={{ height: 20, width: 20, paddingLeft: 10 }}/>
			<img src={require('../images/infinite-water-logo.jpg')} style={{ height: 25, width: 120, paddingLeft: 10 }}/>
		</div>
		<div style={{ display: 'flex', flex: '0.8', flexDirection: 'rows', justifyContent: 'flex-end' }} >
			<img src='http://localhost:3000/data/icons/NotificationBellIcon.png' style={{ display: 'flex', height: 20, width: 20, paddingRight: 10 }}/>
			<img src='http://localhost:3000/data/icons/CalendarIcon.png' style={{ display: 'flex', height: 20, width: 20, paddingLeft: 25, paddingRight: 10 }}/>
			<NameWithIcon />
			<img src='http://localhost:3000/data/icons/LogoutIcon.png' style={{ display: 'flex', height: 20, width: 20, paddingLeft: 25, paddingRight: 10 }}/>
		</div>
	  </div>
      <div style={navigationStyle} >
		<div style={menuItemStyle}  >
		    <NavLink to="/" exact={true} style={itemTextStyle} activeStyle={activeItemStyle}>Home</NavLink>
		</div>
		<div style={{ ...menuItemStyle, flex: 0.01 }}  >
			<div style={{ ...itemTextStyle, fontSize: 16 }}> > </div>
		</div>
		<div style={menuItemStyle}  >
			<NavLink to="/" style={itemTextStyle} activeStyle={activeItemStyle}>Main Page</NavLink>
		</div>
	  </div>
    </div>
	);
  };
};

const styles = {
	headerStyle: {
		display: 'flex',
		flex: 0.5,
		height: '50%',
		width: '100%',
		backgroundColor: '#2c5f8c',
		flexFlow: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	navigationStyle: {
		display: 'flex',
		flex: 0.5,
		height: '50%',
		backgroundColor: '#ffffff',
		flexFlow: 'row'
	},
	menuItemStyle: {
		display: 'flex',
		flex: 0.03,
		alignItems: 'center', 
		justifyContent: 'center'
	},
	itemTextStyle: {
		fontFamily: 'roboto',
		fontSize: 10,
		color: '#999999'		
	},
	activeItemStyle: {
		fontFamily: 'roboto',
		fontSize: 10,
		fontWeight: 'bold',
		color: '#999999'		
	},
	titleItemStyle: {
		fontFamily: 'roboto',
		paddingLeft: 10,
		fontSize: 14,
		color: 'black'		
	}
}

export default Header;