import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(

  <React.StrictMode>
          <App />
  </React.StrictMode>,
  document.getElementById('root')

);

// Creating --vh, --vw variables instead of vh,vw
(function init100vh() {
    function setHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

    }
    setHeight();
    window.addEventListener('resize', setHeight);
})();

(function init100vw() {
    function setWidth() {
        let vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vw', `${vw}px`);

    }
    setWidth();
    window.addEventListener('resize', setWidth);
})();


reportWebVitals();
