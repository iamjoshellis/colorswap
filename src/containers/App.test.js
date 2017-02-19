import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../reducers';
import App from './App';

const store = createStore(rootReducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    div,
  );
});
