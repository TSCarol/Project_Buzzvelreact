import React from 'react';
import { GlobalCss } from './styles';
import Header from './Components/Header';
import Hero from './Components/Hero';
import NaveSection from './Components/Nav';
import Section from './Components/Section/Section1';
import SectionTwo from './Components/Section/Section2';
import BuzzvelSec from './Components/Buzzvel';
import Timeline from './Components/Timeline';

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Hero />
      <NaveSection />
      <Section />
      <SectionTwo />
      <BuzzvelSec />
      <Timeline />
    </>
  );
}

export default App;
