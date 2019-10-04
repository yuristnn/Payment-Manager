import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDEcI8ANwzW9YSv3cCpt0xDw5So6_fkJFA",
  authDomain: 'payment-manager-6c2b3.firebaseapp.com',
  databaseURL: 'https://payment-manager-6c2b3.firebaseio.com',
  projectId: 'payment-manager-6c2b3',
  storageBucket: 'payment-manager-6c2b3.appspot.com',
  messagingSenderId: '41194771660',
  appId: '1:41194771660:web:b5650bba0d0c6ce30f5e69',
};

firebase.initializeApp(firebaseConfig);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
