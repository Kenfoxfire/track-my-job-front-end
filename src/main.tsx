import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import AppRouter from './Router/AppRouter.tsx';
import App from "../src/App.tsx";




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
   </React.StrictMode>,
)
