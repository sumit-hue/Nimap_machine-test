import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import Login from "./components/login/login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
let uid=localStorage.getItem("userEmail");
if(uid){
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        , document.getElementById('root'));
}
else
{
    ReactDOM.render(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
        , document.getElementById('root'));
}

serviceWorker.unregister();
