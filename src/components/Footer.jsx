import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          background: "#060f09",
          padding: "2rem",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "1.4rem",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          Maria Clara ✦ 15 Anos
        </p>

        <p
          style={{
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.15)",
            marginTop: "0.5rem",
            letterSpacing: "0.2em",
          }}
        >
          COM AMOR DA FAMÍLIA ♡
        </p>
      </footer>
    </div>
  );
};

export default Footer;
