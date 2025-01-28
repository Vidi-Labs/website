import React, { useState } from "react";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import StatisticsSection from "../components/StatisticsSection";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import KeyFeature from "../components/KeyFeatures";

import TryApp from "../components/TryApp";
import TabbedFeatures from "../components/TabbedFeatures";

import StatisticSection from "../components/StatisticSection";

import NewsCarousel from "../components/NewsCarousel";





const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <TryApp/>
      <TabbedFeatures/>
      <StatisticSection />
      {/* <Brands /> */}
      <NewsCarousel />
      <Footer />
    </>
  );
};

export default Home;
