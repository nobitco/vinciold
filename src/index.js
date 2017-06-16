import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Layout from './cliente/componentes/Layout';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
