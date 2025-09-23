import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ServiceCards from './components/ServiceCards';
import Departments from './components/Departments';
import ProcessTimeline from './components/ProcessTimeline';
import CountUpStats from './components/CountUpStats';
import TestimonialCarousel from './components/TestimonialCarousel';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ServiceCards />
      <Departments />
      <ProcessTimeline />
      <CountUpStats />
      <TestimonialCarousel />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;