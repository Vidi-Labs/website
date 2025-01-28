import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ProductHero from "../components/ProductHero";
import ThreeColumnLayout from "../components/ProductSection1";
import ProductTestimonialVideo from "../components/ProductsTestimonialVideo";
import ProductTopVideo from "../components/AboutUsNew";



const ProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ScrollToTop />
      <ThreeColumnLayout/>
      {/* <ProductHero /> */}
      <ProductTopVideo />
      <ProductTestimonialVideo />
      <Footer />
    </>
  );
};

export default ProductPage;
