import './Response.css';
import $ from 'jquery';
import Typewriter from 'typewriter-effect';

function Response() {
    return (
        <div className="response">
            <div className="bubble align-text-center" id="response bubble">
                <Typewriter
                options = {{delay: 30}}
                    onInit={(typewriter) => {
                        typewriter.typeString('Hello my name is Sharky the shark! I am here to help you with recommendations about the stock market!')
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(500)
                        .deleteAll()
                        .pauseFor(300)
                        .typeString("Search your company from the list")
                        .start()
                    }}
                />
                <i className="fa fa-spinner fa-pulse fa-3 fa-fw text-primary d-none w-100"></i>
            </div>
        </div>
    );
}


export default Response;