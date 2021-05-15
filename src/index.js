import './assets/scss/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app/App';
import { ContextAuthProvider } from './app/feature/hoc/Context';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <ContextAuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextAuthProvider>,
  document.getElementById('root')
);
