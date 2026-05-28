import React from "react";
import image1 from "../assets/image0.jpeg"
import image2 from "../assets/image1.jpeg"
import image3 from "../assets/image2.jpeg"
import image4 from "../assets/image3.jpeg"
import image5 from "../assets/image4.jpeg"
import image6 from "../assets/image5.jpeg"
import image7 from "../assets/image6.jpeg"
import image8 from "../assets/image7.jpeg"
import image9 from "../assets/image8.jpeg"
import image10 from "../assets/image9.jpeg"
import image11 from "../assets/image10.jpeg"
import image12 from "../assets/image11.jpeg"
import image13 from "../assets/image12.jpeg"
import image14 from "../assets/image13.jpeg"
import image15 from "../assets/image14.jpeg"
import image16 from "../assets/image15.jpeg"
import image17 from "../assets/image16.jpeg"
import image18 from "../assets/image17.jpeg"

const Slideshow = () => {
  const photos = [
    image1,
    image4,
    image7,
    image18,
    image8,
    image15,
    image3,
    image5,
    image13,
    image9,
    image10,
    image12,
    image2,
    image17,
    image14,
    image16,
    image6,
    image11,
  ];

  return (
    <div>
      <section className="slideshow-section">
        <p className="section-label">📷 star of the show</p>
        <h2 className="section-title">Uma vida cheia de sorrisos</h2>

        <div className="slideshow-track-outer">
          <div className="slideshow-track" id="slideshowTrack">
            {[...photos, ...photos].map((photo, index) => (
              <div className="slide-item" key={index}>
                <div className="slide-frame">
                  <div className="slide-img-container">
                    <img src={photo} alt={photo.caption} />
                  </div>
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
