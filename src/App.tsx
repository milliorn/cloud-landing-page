import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Support from "./components/Support";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

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
