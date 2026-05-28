import React, { useState } from "react";
import Hero from "../components/Hero";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import ScrollText from "../components/ScrollText";
import EventInfo from "../components/EventInfo";
import Ticker from "../components/Ticker";
import Modal from "../components/modal";
import About from "../components/About";
import Rsvp from "../components/Rsvp";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Hero onOpenModal={() => setModalOpen(true)} />
      <EventInfo />
      <About />
      <Rsvp onOpenModal={() => setModalOpen(true)} />
      <Slideshow />
      <Ticker />
      <ScrollText />
      <Footer />
      <Modal openModal={modalOpen} closeModal={() => setModalOpen(false)} />
    </div>
  );
};

export default Home;
