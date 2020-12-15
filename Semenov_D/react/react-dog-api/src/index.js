import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const emptyState = './static/empty.jpg'

ReactDOM.render(<App emptyState={emptyState}/>, document.getElementById('root'));
registerServiceWorker();
