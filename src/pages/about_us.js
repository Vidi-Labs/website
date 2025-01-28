import React, { useState } from "react";
import HeroSectionAboutUs from "../components/HeroSectionAboutUs";
import ScrollToTop from "../components/ScrollToTop";
import TeamUpdated from "../components/TeamUpdated"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const AboutUsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ScrollToTop />
      <HeroSectionAboutUs />
      <TeamUpdated />
      <Footer />
    </>
  );
};

export default AboutUsPage;
