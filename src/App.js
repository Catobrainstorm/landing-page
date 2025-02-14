

import React from 'react'
import Navbar from './components/Navbar';
import HeaderOne from './components/HeaderOne';
import ImageCarousel from './components/ImageCarousel';
import OtherServices from './components/OtherServices';
import Process from './components/Process';
import Project from './components/Project';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import FooterEnd from './components/FooterEnd';
import "@fontsource/manrope"; 
// import "@fontsource/manrope/400.css";
// import "@fontsource/manrope/400-italic.css";


function App() {
  return (
    <div>
      <Navbar /> 
      <HeaderOne />
      <ImageCarousel />
      <OtherServices />
      <Process />
      <Project />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <FooterEnd />
    </div>
  );
}

export default App;
