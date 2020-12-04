import './Main.css';
import Chattershark from './Chattershark';
import Response from './Response';
import Graph from './Graph';
import { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="body-container">
                <Chattershark />
                <Response />
                <Graph />
            </div>
        )
    }
}

export default Main;