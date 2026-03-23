import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Specialists from "./Components/Specialists";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Specialists />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
