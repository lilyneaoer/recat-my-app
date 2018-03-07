import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Btm from './Btm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<Btm/>, document.getElementById('example'));
registerServiceWorker();
