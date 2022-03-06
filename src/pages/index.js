import * as React from "react";
import HeroSection from '../components/HeroSection.jsx';
import Header from '../components/Header.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import Footer from '../components/Footer.jsx';

export default function Index() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
