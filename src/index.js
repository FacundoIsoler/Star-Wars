import React from 'react';
import ReactDOM from 'react-dom';
import App from './Container/App.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./Store/index.js";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
