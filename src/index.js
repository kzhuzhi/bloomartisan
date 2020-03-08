import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

//bootstrap
//import './assets/css/bootstrap.min.css'
//theme style
//import './assets/css/bootstrap.css'
//import './assets/css/style.css'
//import './assets/css/business-casual.min.css'

ReactDOM.render(
    <HashRouter>
    <App/>
    </HashRouter>, 
    document.getElementById('root')
);


serviceWorker.unregister();
//registerServiceWorker();
