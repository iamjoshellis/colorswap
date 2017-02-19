import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'normalize-css';

import rootReducer from './reducers';
import App from './containers/App';
import './styles/main.css';

const persistedState = localStorage.getItem('colorsState') ? JSON.parse(localStorage.getItem('colorsState')) : {};

const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  localStorage.setItem('colorsState', JSON.stringify(store.getState()));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
