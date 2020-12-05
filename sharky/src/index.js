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
import companies from './nasdaq.json';


let smthn = "Hello my name is Sharky!";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path = '/'><Main smthn = {smthn}/></Route>
      <Route path='/about'><About /></Route>
    </Switch>
    <Background />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

const search = document.getElementById('search');

const matchList = document.getElementById('match-list');

const searchComps = searchText => {
    let matches = companies.filter(company => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return (company.name.match(regex) || company.symbol.match(regex));
    });
    // console.log(matches);
    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';

    }
    // console.log(matches);
    outputHTML(matches);
};

const outputHTML = matches => {
  if(matches.length > 0) {
    const HTML = matches.map(match => `
      <div class = "card card-body mb-1">
        <h5 class= "choice" id = "${match.symbol}|${match.name}">${match.name} (${match.symbol})</h5> 
      </div>
    `).join('');
    matchList.innerHTML = HTML;
  }
}

search.addEventListener('input',() => {
  searchComps(search.value)
});

matchList.addEventListener('click', e =>{
  if(e.target.classList.contains('choice')) {
    const details = e.target.id.split('|');
    console.log('Fetching details for ', details[1]);
    fetch(`https://66b4c8d61d45.ngrok.io/sent/${details[0]}`)
  .then(response=>response.json())
  .then(data => {smthn=data.positive; console.log(smthn);});
  }
});


// autocomplete(document.getElementById("myInput"), countries);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
