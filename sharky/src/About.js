import React from "react";
import './About.css'
import Agastya from './img/Agastya.png';
import Arnav from './img/Arnav.png';
import Malab from './img/Malab.png';
import Simran from './img/Simran.png';

const About = () => (
  <div className="fade-in about">
    <h1 className="title is-1 text-center mt-4 text-info mb-4">The About Page</h1>
    <p className="container text-secondary">
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
      et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
      in efficitur arcu congue. Nam fermentum commodo egestas.
    </p>
    <h3 className= "text-center mt-5">Meet the Team</h3>
    <div className="container mt-5">
        <div className="card about d-inline-block mx-1" style={{width: "24%"}}>
        <img src={Agastya} className="img shark mx-auto d-block" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center text-dark">Agastya</h5>
            <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://www.linkedin.com/in/agastya-varma-51b9881a7/" target="_blank" rel="noreferrer" className="btn btn-outline-dark d-block mx-auto">Linkedin Profile</a>
        </div>
        </div>
        <div className="card about d-inline-block mx-1" style={{width: "24%"}}>
        <img src={Arnav} className="img shark mx-auto d-block" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center text-dark">Arnav</h5>
            <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://www.linkedin.com/in/arnav-jose-0a3a501bb/" target="_blank" rel="noreferrer" className="btn btn-outline-dark d-block mx-auto">Linkedin Profile</a>
        </div>
        </div>
        <div className="card about d-inline-block mx-1" style={{width: "24%"}}>
        <img src={Malab} className="img shark mx-auto d-block" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center text-dark">Malab</h5>
            <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://www.linkedin.com/in/malab-sankar-barik-228a4b1bb/" target="_blank" rel="noreferrer" className="btn btn-outline-dark d-block mx-auto">Linkedin Profile</a>
        </div>
        </div>
        <div className="card about d-inline-block mx-1" style={{width: "24%"}}>
        <img src={Simran} className="img shark mx-auto d-block" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center text-dark">Simran</h5>
            <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://www.linkedin.com/in/simran-98b4561a8/" target="_blank" rel="noreferrer" className="btn btn-outline-dark d-block mx-auto">Linkedin Profile</a>
        </div>
        </div>
        
    </div>
  </div>
);

export default About;