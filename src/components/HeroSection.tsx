import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  isDark: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDark }) => {
  return (
    <section className="pt-32 pb-20 mb-6 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-6">
          Reliable US-Based Software Development<br />That Delivers Results
        </h1>
        <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          We help startups and enterprises build scalable, high-performing digital <br/> products right here from the USA.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </button>
          <button className={`px-8 py-3 rounded-full border-2 transition-colors ${isDark ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'}`}>
            See Our Work
          </button>
        </div>

        {/* Hero Visual */}
       {/* Hero Visual */}
        <div className="mt-2 relative h-96">
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-blue-500 opacity-10 blur-3xl rounded-full"></div>
          </div>

          {/* Connection lines */}
    
         { !isDark  ? 
          <img src="/assets/HeroImage1.png" /> : <img src="/assets/HeroImage2.png" /> }
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
