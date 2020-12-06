import './Response.css';
import { Component } from 'react';
import Typewriter from 'typewriter-effect';

class Response extends Component {
  render() {
    // console.log(this.props.message);
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