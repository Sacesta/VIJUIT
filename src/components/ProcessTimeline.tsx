import React from 'react';

// Custom SVG Icons to match the image
const DiscoverIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="1.5">
    <path d="M15 12a4 4 0 10-8 0 4 4 0 008 0z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5 6h.01" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.96 11.5c.23-.4.34-.85.34-1.32 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 .47.11.92.34 1.32" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.19 18.5l-2.83-2.83" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="13.5" cy="13.5" r="3.5"/>
  </svg>
);

const DesignIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="1.5">
    <path d="M9 11.25l-3.33-3.33a2.5 2.5 0 00-3.54 0v0a2.5 2.5 0 000 3.54L5.5 14.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 12.75l3.33 3.33a2.5 2.5 0 003.54 0v0a2.5 2.5 0 000-3.54L18.5 9.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11.25L15 5.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 12.75L9 18.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ThumbsUpIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="1.5">
    <path d="M7 11V7a1 1 0 011-1h3.5a3.5 3.5 0 013.5 3.5v0a3.5 3.5 0 01-3.5 3.5h-5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 11V18a1 1 0 001 1h8.5a1.5 1.5 0 001.5-1.5v-3.5a1.5 1.5 0 00-1.5-1.5h-5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const ArrowConnector = () => (
    <div className="flex-grow flex items-center justify-center -mx-4">
        <svg width="100%" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="12" x2="88" y2="12" stroke="#2563EB" strokeWidth="2"/>
            <path d="M88 6 L98 12 L88 18" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
);

interface ProcessSectionProps {
  isDark: boolean;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ isDark }) => {
  const processSteps = [
    { icon: DiscoverIcon, title: 'Discover', description: 'We start by understanding your goals and challenges.' },
    { icon: DesignIcon, title: 'Design', description: 'UX experts craft clean, user-centered solutions.' },
    { icon: ThumbsUpIcon, title: 'Develop', description: 'Skilled developers bring your vision to life.' },
    { icon: ThumbsUpIcon, title: 'Deploy', description: 'Seamless handoff with robust testing.' },
    { icon: ThumbsUpIcon, title: 'Support', description: 'Ongoing optimization and maintenance.' }
  ];

  return (
    <section className=" py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* The title can be added here if needed */}
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Our Proven 5-Step Process</h2> */}
        
        <div className="flex flex-col md:flex-row justify-between items-start w-full">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center max-w-[180px] mx-auto">
                <div className="relative mb-4">
                  {/* Outer ring for the grainy/shadow effect */}
                  <div className="absolute -inset-1.5 bg-blue-500/30 rounded-full blur-md"></div>
                  
                  {/* Main icon circle */}
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center p-1 shadow-lg ring-2 ring-blue-900/50">
                    <step.icon />
                  </div>
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{step.title}</h3>
                <p className={`mt-2 text-sm ${isDark ? 'text-white' : 'text-black'}`}>{step.description}</p>
              </div>

              {/* Render arrow connector between items, not for the last one */}
              {index < processSteps.length - 1 && (
                <div className="flex-1 pt-12 hidden md:block">
                  <ArrowConnector />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;