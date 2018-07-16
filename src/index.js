import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Rotas from './components/Rotas';

ReactDOM.render(<Rotas />, document.getElementById('root'));
registerServiceWorker();
