import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import "bulma/css/bulma.min.css";
import './index.css';
import Background from './Background';
import Navbar from './Navbar';
import Main from './Main';
import About from './About';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,  Route, Switch} from 'react-router-dom';
import Landing from './Landing';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path = '/main'><Main /></Route>
      <Route exact path='/'><Landing/></Route>
      <Route path='/about'><About /></Route>
    </Switch>
    <Background />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
