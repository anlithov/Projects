import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';


import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Arimo Web:400,500,600,700', 'sans-serif']
    }
});

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
