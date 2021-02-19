import React from "react";
import Header from "./components/Header";
import SectionSlider from "./components/SectionSlider";
import SectionTop from "./components/SectionTop";
import SectionVideo from "./components/SectionVideo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <SectionSlider />
      <SectionTop />
      <SectionVideo />
      <Footer />
    </div>
  );
};

export default App;
