import React from "react";
import './About.css'
import Agastya from './img/Agastya.png';
import Arnav from './img/Arnav.png';
import Malab from './img/Malab.png';
import Simran from './img/Simran.png';

const About = () => (
  <div>
    <h1 className="title is-1 text-center mt-4 text-info mb-4">This is the About Page</h1>
    <p className="container text-secondary">
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
      et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
      in efficitur arcu congue. Nam fermentum commodo egestas.
    </p>
    <h3 className= "text-center mt-5">Meet the Team</h3>
    <div className="container mt-5">
        <div className="card d-inline-block mx-1" style={{width: "24%"}}>
        <img src={Agastya} className="img shark mx-auto d-block" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center text-dark">Agastya</h5>
            <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-outline-dark">Go somewhere</a>
        </div>
        </div>
        <div className="card d-inline-block mx-1" style={{width: "24%"}}>
        <img src={Arnav} className="img shark mx-auto d-block" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center text-dark">Arnav</h5>
            <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-outline-dark">Go somewhere</a>
        </div>
        </div>
        <div className="card d-inline-block mx-1" style={{width: "24%"}}>
        <img src={Malab} className="img shark mx-auto d-block" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center text-dark">Malab</h5>
            <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-outline-dark">Go somewhere</a>
        </div>
        </div>
        <div className="card d-inline-block mx-1" style={{width: "24%"}}>
        <img src={Simran} className="img shark mx-auto d-block" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center text-dark">Simran</h5>
            <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-outline-dark">Go to my Github!</a>
        </div>
        </div>
        
    </div>
  </div>
);

export default About;