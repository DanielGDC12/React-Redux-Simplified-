import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import configStore from './components/store/StoreConfig';


const store = configStore();

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
