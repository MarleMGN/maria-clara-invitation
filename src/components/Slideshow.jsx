import React from "react";

const Slideshow = () => {
  const photos = [];

  return (
    <div>
      <section className="slideshow-section">
        <p className="section-label">📷 momentos especiais</p>
        <h2 className="section-title">Uma vida cheia de sorrisos</h2>

        <div className="slideshow-track-outer">
          <div className="slideshow-track" id="slideshowTrack">
            {[...photos, ...photos].map((photo, index) => (
              <div className="slide-item" key={index}>
                <div className="slide-frame">
                  <div className="slide-img-container">
                    <img src={photo.src} alt={photo.caption} />
                  </div>
                  <p className="slide-caption">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slideshow;
