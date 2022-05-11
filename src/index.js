import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./scss/main.scss"
import {BrowserRouter} from "react-router-dom";
// import Lesson from "./components/Need/SaidBar/Lesson";
ReactDOM.render(

      <BrowserRouter>
          <React.StrictMode>
          <App />
          {/*<Lesson/>*/}
          </React.StrictMode>
      </BrowserRouter>
  ,
  document.getElementById('root')
);

