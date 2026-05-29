import React from "react";
import palmtreephoto from '../assets/retropostcard1.jpg'
import icecreamphoto from "../assets/retropostcard2.jpg"

const Rsvp = ({ onOpenModal }) => {
  return (
    <>
      <section className="rsvp-section">
        <div className="rsvp_img-right">
          <img src={palmtreephoto} alt="" />
        </div>
        <div className="rsvp_img-left">
          <img src={icecreamphoto} alt="" />
        </div>
        <div className="rsvp-inner">
          <h2 className="rsvp-title">Você vem?</h2>

          <p className="rsvp-body">
            A Maria Clara ficaria feliz demais com sua presença.
            <br />
            Confirme até{" "}
            <strong style={{ color: "var(--neon-pink)" }}>
              07 de Junho
            </strong>{" "}
            para garantir seu lugar nessa noite inesquecível.
          </p>

          <button className="rsvp-btn" onClick={onOpenModal} id="rsvpBtn">
            CONFIRMAR PRESENÇA
          </button>

          <p
            style={{
              marginTop: "2rem",
              fontSize: "0.85rem",
              color: "var(--ink)",
              letterSpacing: "0.1em",
            }}
          >
            Dúvidas? Entre em contato via WhatsApp +55 62 99399-4897
          </p>
        </div>
      </section>
    </>
  );
};

export default Rsvp;
