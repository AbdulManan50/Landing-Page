import React from "react";
import Header from "./Component/Header";
import Services from "./Component/Services";
import Contactus from "./Component/Contactus";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Banner from "./Component/Banner";

export default function App() {
  return (
    <>
      <div className="scroll-smooth" >
        <Header />
        <Banner />
        <About />
        <Services />
        <Contactus />
        <Footer />
      </div>
    </>
  );
}
