import React from 'react';
import { ArrowRight } from 'lucide-react';

// This component uses placeholder images from Unsplash.
// The background effect is an approximation of the image using CSS gradients and blur.
interface HeroSectionProps {
  isDark: boolean;
}

const MissionVisionSection: React.FC<HeroSectionProps>  = ({isDark}) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden flex items-center justify-center">
      

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-black'}`}>
          Driven by Innovation. Grounded in Trust.
        </h2>
        <p className={`text-base md:text-lg max-w-4xl mx-auto mb-12 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Founded in the USA, our mission is simple: to build technology that makes businesses run smarter.
            We believe in clarity, communication, and commitment to results.
            Our vision is to be a trusted global partner for businesses seeking reliable and transparent software development.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <div className="relative rounded-2xl overflow-hidden h-80 group">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1050&q=80" 
              alt="Woman at computer with data visualizations" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-left">
              <h3 className="text-3xl font-bold mb-3 text-white">Mission</h3>
              <p className="text-white/90 text-lg">
                Deliver measurable value through clean code and honest collaboration.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-2xl overflow-hidden h-80 group">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1050&q=80" 
              alt="Robotic hand touching a glowing orb representing technology" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-left">
              <h3 className="text-3xl font-bold mb-3 text-white">Vision</h3>
              <p className="text-white/90 text-lg">
                To empower global businesses with innovation built on trust.
              </p>
            </div>
          </div>
        </div>

        <button className="bg-blue-500 text-white px-5 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-3 mx-auto text-lg">
          Know more
          <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-blue-500" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default MissionVisionSection;