import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './navigation';
import AppWithContext from './AppWithContext';

ReactDOM.render(
  <React.StrictMode>
    <AppWithContext>
      <Navigation />
    </AppWithContext>
  </React.StrictMode>,
  document.getElementById('root')
);
