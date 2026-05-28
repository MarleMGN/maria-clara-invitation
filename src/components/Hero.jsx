import React from "react";
import goldenpolaroid from "../assets/goldenhourpolaroid.jpg";
import vinylphoto from "../assets/tropicalvinyl.jpg";
import Confetti from "./Confetti";
import foliage_divider from "../assets/foliage_divider.png";

const Hero = ({ onOpenModal }) => {
  return (
    <div>
      <section className="hero">
        <Confetti
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 999,
          }}
        />
        <div
          style={{
            position: "relative",
            inset: 0,
            pointerEvents: "none",
            zIndex: 999,
          }}
        >
        </div>
        <div className="decoration_bottom-left">
          <img src={vinylphoto} alt="" />
        </div>
        <div className="decoration_bottom-right">
          <img src={goldenpolaroid} alt="" />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">
            ✦ você está convidado para o aniversário da ✦
          </p>
          <h1 className="hero-name">
            <span>Maria</span>
            <span>Clara</span>
          </h1>
          <p className="hero-age">15</p>
          <div style={{ animation: "fadeSlideUp 1s ease 1s both" }}>
            <a
              href="#info"
              className="hero-cta"
              onClick={(event) => {
                event.preventDefault();
                onOpenModal();
              }}
            >
              <span>CONFIRMAR PRESENÇA</span>
            </a>
          </div>
        </div>
        <div className="foliage_divider">
          <img src={foliage_divider} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
