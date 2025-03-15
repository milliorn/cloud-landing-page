import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Pricing from "./components/Pricing";
import Support from "./components/Support";

/* main app entry */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Platform />
      <Pricing />
      <Footer />
    </>
  );
}
