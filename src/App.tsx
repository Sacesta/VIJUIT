import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MissionVision from './components/MissionVision';
import Technologies from './components/Technologies';
import Process from './components/ProcessTimeline';
import Portfolio from './components/Portfolio';
import Templates from './components/Templates';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#000000] text-white' : 'bg-white text-gray-900'}`}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <HeroSection isDark={isDark} />
      <MissionVision isDark={isDark} />
      <Technologies isDark={isDark} />
      <Process isDark={isDark} />
      <Portfolio isDark={isDark} />
      <Templates isDark={isDark} />
      <CallToAction />
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
