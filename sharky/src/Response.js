import './Response.css';
import $ from 'jquery';
import Typewriter from 'typewriter-effect';

function Response(props) {
    return (
        <div className="response">
            <div className="bubble align-text-center" id="response bubble">
                <Typewriter
                options = {{delay: 30}}
                    onInit={(typewriter) => {
                        typewriter.typeString(props.smthn)
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(500)
                        .deleteAll()
                        .pauseFor(300)
                        .typeString("Search your company from the list")
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString(props.smthn)
                        .start()
                    }}
                />
                <i className="fa fa-spinner fa-pulse fa-3 fa-fw text-primary d-none w-100"></i>
            </div>
        </div>
    );
}


// fetch('https://248a15902960.ngrok.io/sent/AAPL')
// .then(response=>response.json())
// .then(data => console.log(data));


export default Response;