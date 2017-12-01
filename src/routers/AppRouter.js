import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';

import MainPage from '../components/MainPage'; 

const AppRouter = () => (
  <BrowserRouter>
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', height: window.innerHeight, width: window.innerWidth }}>
	  <div style={{ display: 'flex', flex: 0.08, height: '100%', width: '100%' }} >
		  <Header />
	  </div>
	  <div style={{ display: 'flex', flex: 0.92, height: '100%', width: '100%' }} >	  
		  <Switch>
			<Route path="/" component={MainPage} exact={true} />
		  </Switch>
	  </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
