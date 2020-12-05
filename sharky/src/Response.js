import './Response.css';
import $ from 'jquery';
import { Component } from 'react';
import Typewriter from 'typewriter-effect';

class Response extends Component {
    constructor(props){
      super(props);
    }
    componentDidMount() {
      // this.forceUpdate();
    }
    render() {
      console.log(this.props.message);
      return (
          <div className="response">
              <div className="bubble align-text-center" id="response bubble">
                  <Typewriter
                    options = {{delay: 30, autoStart:true, strings:[this.props.message,], pauseFor:900000, cursorClassName:'cursor'}}  
                  />
              </div>
          </div>
      );
    }
}

export default Response;