import React from 'react';
import ReactDOM from 'react-dom';
import { application } from './stores/application';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App appState={ application } />, document.getElementById('root'));
registerServiceWorker();
