import * as React from "react";
import HeroSection from '../components/HeroSection.jsx';
import Header from '../components/Header.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import Footer from '../components/Footer.jsx';
import { Helmet } from 'react-helmet';

export default function Index() {
  return (
    <>
      <Helmet>
        <title>David Rajec's Portfolio</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-224074954-1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-224074954-1');`}
        </script>
      </Helmet>
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
