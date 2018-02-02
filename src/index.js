import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Store from './store';
import Routes from './routers';
import './app.css';
  
 ReactDOM.render(
  <Provider store={Store}>
    <Routes />
  </Provider>
  , document.getElementById('root')
 );
