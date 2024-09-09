import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import AppRouter from './Router/AppRouter'
import { Provider } from "react-redux";
import { store } from './store/store';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter>
    <AppRouter  />
    </BrowserRouter>
    </Provider>
   </React.StrictMode>,
)
