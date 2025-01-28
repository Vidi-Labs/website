import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import FaqSection from "../components/FaqSection";
import ContactUsPage from "../components/ContactUS";

const SupportPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ScrollToTop />
      <FaqSection />
      <ContactUsPage/>
      <Footer />
    </>
  );
};

export default SupportPage;
