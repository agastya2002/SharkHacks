import React from "react";
import './Landing.css'
import hero from './img/hero_image.PNG';
import Typewriter from 'typewriter-effect';
import {NavLink} from 'react-router-dom';

const first = "Get help from your friendly neighbourhood shark!"
const second = "Financial predictions from the best fishies in the sea!"

const Landing = () => {

    // setTimeout(addclass, 5500);
    return(
  <div className="container landing">
      <h1 className="Display text-center text-info mx-auto fade-in"><Typewriter options = {{delay: 50, autoStart:true, strings:[first, second], pauseFor:3000, loop: true}}  /></h1>
      <NavLink className="link mx-auto mt-3 mb-4" to="/main"><button className="btn btn-success ">Start Now!</button></NavLink>
      <img id ="hero" src={hero} className = "img-fluid mt-auto fade-in-long" alt=""/>
  </div>
)};

export default Landing;