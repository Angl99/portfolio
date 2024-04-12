import React, { useState } from 'react';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';

function App() {

  return (
    <>
      <div>
        <Intro />
        <Portfolio />
        <Timeline />
      </div>
    </>
  )
}

export default App
