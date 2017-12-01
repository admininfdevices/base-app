import React, { Component } from 'react';
//import { BrowserRouter } from 'react-router-dom';

import AppRouter from './routers/AppRouter';


class App extends Component {
  render() {
    return (
			<AppRouter />
    );
  }
}

export default App;
