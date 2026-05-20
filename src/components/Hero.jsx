import React from "react";
import sunsetphoto from "../assets/sunsetphoto.jpg"
import goldcamera from "../assets/goldcamera.png"
import herobackground from "../assets/herobackground-removebg.png"

const Hero = ({ onOpenModal }) => {
  return (
    <div>
      <section className="hero">
        <div className="background-img">
            <img src={herobackground} />
        </div>
          <div className="decoration_bottom-left">
            <img src={sunsetphoto} alt="" />
          </div>
          <div className="decoration_bottom-right">
            <img src={goldcamera} alt="" />
          </div>
        <div className="hero-content">
          <p className="hero-eyebrow">
            ✦ você está convidada para o aniversário de ✦
          </p>
          <h1 className="hero-name">
            Maria<span>Clara</span>
          </h1>
          <p className="hero-age">15</p>
          <a href="#info" className="hero-cta" onClick={(event) => { event.preventDefault(); onOpenModal(); }}>
            <span>Ver detalhes</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
