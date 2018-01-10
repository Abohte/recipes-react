<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'
>>>>>>> own

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
<<<<<<< HEAD
  document.getElementById('root')
)

registerServiceWorker()
=======
  document.getElementById('root'));
registerServiceWorker();
>>>>>>> own
