import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import CareersPage from "./pages/careers";
import AboutUsPage from "./pages/about_us";
import { useEffect } from "react";
import ReactGA from "react-ga";
import ProductPage from "./pages/product_page";
import SupportPage from "./pages/support_page";
import SocialPage from "./pages/social_page";
import WaitListPage from "./pages/waitlist_page";
import ResourcePage from "./pages/resource_page";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-179973318-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/resource" element={<ResourcePage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/waitlist" element={<WaitListPage />} />


      </Routes>
    </Router>
  );
}

export default App;
