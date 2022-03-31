// ===============before===============


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import './categories.styles.scss';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ===============after===============


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
        );


