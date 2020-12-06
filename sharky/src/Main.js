import './Main.css';
import Chattershark from './Chattershark';
import Response from './Response';
import Graph from './Graph';
import { Component } from 'react';
import companies from './nasdaq.json';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: "Hello I'm Sharky! Search your company from the list",
          name: ""
        }
    }
    componentDidMount() {
      // console.log('compdidmount')
      // const name = ""
      const search = document.getElementById('search');
      const matchList = document.getElementById('match-list');
      const graph = document.getElementById('graph')
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
        matchList.innerHTML = '';
        search.value = '';
        search.style.display = 'none';
        if(e.target.classList.contains('choice')) {
          const details = e.target.id.split('|');
          this.setState({
            name: details[1],
            message: `Please wait for a while. My fishies are hard at work crunching numbers! <div class="dot-flashing"></div>`
          });
          console.log('Fetching details for ', details[1]);
          fetch(`https://4fc3cabab1ec.ngrok.io/sent/${details[0]}`)
          .then(response=>response.json())
          .then(data => {
            search.style.display = 'block';
            if(data.check === 0){
              var image1 = document.createElement('img');
              image1.className = "gone";
              image1.src = 'data:image/png;base64, ' + data.high;
              graph.appendChild(image1);
              var image2 = document.createElement('img');
              image2.className = "gone";
              image2.src = 'data:image/png;base64, ' + data.close;
              graph.appendChild(image2);
              this.setState({
                message: `
                The data gathered on ${this.state.name} by my loyal fishies is as follows<br>
                Positive sentiment: ${data.positive}<br>
                Negative sentiment: ${data.negative}<br>
                Analysing the data I predict todays price to be $${data.price}
              `
              });
            } else {
              this.setState({
                message: `
                The data gathered on ${this.state.name} by my loyal fishies is as follows<br>
                Positive sentiment: ${data.positive}<br>
                Negative sentiment: ${data.negative}<br>
                ${data.price}
              `
            });
          }
            console.log(this.state.message);});
        }
      });
    }
    render() {
      // console.log('render');
        return(
            <div className="body-container">
                <Chattershark/>
                <Response message = {this.state.message}/>
                <Graph />
            </div>
        )
    }
}



export default Main;
