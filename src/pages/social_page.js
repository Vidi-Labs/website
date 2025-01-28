import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import SocialRecenetPosts from "../components/SocialRecentPost";
import FeaturedOn from "../components/FeaturedOn"

const SocialPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ScrollToTop />
      <FeaturedOn/>
      <SocialRecenetPosts/>
      <Footer />
    </>
  );
};

export default SocialPage;
