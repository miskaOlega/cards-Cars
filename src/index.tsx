import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {Routers} from './Routes/Routes';
import { store } from './Redux/store';
import "./style.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Routers />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);