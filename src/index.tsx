import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from "./GlobalStyle";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <GlobalStyles/>
          <App/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

