import React from 'react';
import { ArrowRight } from 'lucide-react';

// Custom SVG Icon Components to match the image
const HTML5Icon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2L5.5 20.5L12 22L18.5 20.5L20 2H4Z" fill="#E44D26"/>
    <path d="M12 4V19.5L17 18L18 4H12Z" fill="#F16529"/>
    <path d="M12 8.5H15.5L15 13.5L12 14.5V12.5H13.5L13.75 10H12V8.5Z" fill="white"/>
    <path d="M8 6H12V8H9.5L9.75 10.5H12V12.5H8.5L8.25 10H7.5L7 6H8Z" fill="#EBEBEB"/>
  </svg>
);

const CSS3Icon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2L5.5 20.5L12 22L18.5 20.5L20 2H4Z" fill="#264DE4"/>
    <path d="M12 4V19.5L17 18L18 4H12Z" fill="#2965F1"/>
    <path d="M12 8.5H15.5L15.25 11.5L12 12.5V10.5H13.75L14 8.5H12Z" fill="white"/>
    <path d="M8.5 6H12V8H9.5L9.25 10.5H12V12.5H8L8.5 6Z" fill="#EBEBEB"/>
  </svg>
);

const JavaScriptIcon = () => (
  <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-lg">
    <span className="text-2xl font-bold text-black">JS</span>
  </div>
);

const BootstrapIcon = () => (
  <div className="w-12 h-12 bg-purple-600 flex items-center justify-center rounded-lg">
    <span className="text-3xl font-bold text-white">B</span>
  </div>
);

const TailwindCSSIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12c-3.142 0-5.143-1.524-6-4.571 1.286-1.524 2.643-2.095 4.286-1.714C11.143 5.905 11.714 6.476 12.429 7.143 13.571 8.286 15 9.714 18 9.714c3.143 0 5.143-1.524 6-4.571-1.286 1.524-2.643 2.095-4.286 1.714C18.857 6.667 18.286 6.095 17.571 5.429 16.429 4.286 15 2.857 12 2.857s-4.429 1.428-5.571 2.571" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-2, 5)"/>
    <path d="M6 18.286c-3.143 0-5.143-1.524-6-4.571 1.286-1.524 2.643-2.095 4.286-1.715.857.19 1.5.762 2.286 1.429C7.571 14.571 9 16 12 16c3.143 0 5.143-1.524 6-4.571-1.286 1.524-2.643 2.095-4.286 1.714-.857-.19-1.5-.762-2.286-1.428C10.429 10.571 9 9.143 6 9.143" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-2, 5)"/>
  </svg>
);

const ReactIcon = () => (
  <svg width="48" height="48" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const VueIcon = () => (
    <svg width="48" height="48" viewBox="0 0 256 221" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M204.8 0H256L128 220.8L0 0H51.2L128 132.48L204.8 0Z" fill="#41B883"/>
        <path d="M0 0L128 220.8L256 0H204.8L128 132.48L51.2 0H0Z" fill="#41B883"/>
        <path d="M51.2 0L128 133.12L204.8 0H153.6L128 44.16L102.4 0H51.2Z" fill="#35495E"/>
    </svg>
);

const FlutterIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.314 0L6.039 8.275l4.132 4.132 8.275-8.275L14.314 0zm.001 9.868l-4.133 4.133 4.133 4.132 8.275-8.275-8.275-8.265-.001 8.275z" fill="#027DFD"/>
    </svg>
);

const DartIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.52 16.89l-2.83 2.83 8.48 8.48 2.83-2.83-8.48-8.48z" fill="#0175C2" transform="translate(-5, -7) scale(0.9)"/>
      <path d="M4.33 19.01l8.48 8.48L10 24l-7.07-7.07L10 10l-2.83-2.83L0 14.14l7.07 7.07 2.83-2.83L10 18.48l-.66-.67z" fill="#01579B" transform="translate(-5, -7) scale(0.9)"/>
    </svg>
);

const FirebaseIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.12 8.49l7.46-7.09a2.1 2.1 0 012.84 0l7.46 7.09a2.1 2.1 0 01-1.42 3.54H4.54a2.1 2.1 0 01-1.42-3.54z" fill="#FFCA28"/>
        <path d="M18.9 13.25a2.1 2.1 0 012.1 2.1v4.54a2.1 2.1 0 01-3.54 1.42l-5-5-5.05 5a2.1 2.1 0 01-3.54-1.42V15.35a2.1 2.1 0 012.1-2.1z" fill="#F57C00"/>
        <path d="M3.12 8.49l.06-.06 8.82-8.32a2.1 2.1 0 012.84 0l.1.1 2.21 2.1-12.45 11.82.02.01-1.6-1.51v-.01a2.1 2.1 0 01-1.42-3.54z" fill="#FFA000"/>
    </svg>
);

const RestApiIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" fill="#E0F2FE"/>
    <path d="M29.6 19.3333C31.5543 19.3333 33.3768 20.0881 34.6269 21.3382C35.877 22.5884 36.6318 24.4109 36.6318 26.3651C36.6318 29.3807 34.6853 31.7909 32.1818 32.6101" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.4 28.6667C16.4457 28.6667 14.6232 27.9119 13.3731 26.6618C12.123 25.4116 11.3682 23.5891 11.3682 21.6349C11.3682 18.6193 13.3147 16.2091 15.8182 15.3899" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.8182 22.0455C19.0609 21.9056 19.3244 21.8021 19.601 21.7397" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M29.1818 25.9545C28.9391 26.0944 28.6756 26.1979 28.399 26.2603" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="24" y="26" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="#0369A1" textAnchor="middle">REST</text>
    <text x="24" y="32" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="#0369A1" textAnchor="middle">API</text>
  </svg>
);


const SQLiteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2.05V10.9C13 11.53 12.38 11.97 11.83 11.73L5.21 8.94C4.54 8.64 4 7.97 4 7.23V4.8C4 3.98 4.67 3.29 5.48 3.21L11.52 2.1C12.34 2.03 13 2.66 13 3.48V2.05Z" fill="#3B82F6"/>
    <path d="M11.5 22L4.5 19V11L11.5 14V22Z" fill="#60A5FA"/>
    <path d="M20 18.5L13 15.5V8.5L20 11.5V18.5Z" fill="#3B82F6"/>
    <path d="M11.5 12.44L4.5 9.44V7.5L11.5 10.5V12.44Z" fill="#1D4ED8"/>
  </svg>
);

interface TechnologiesProps {
  isDark: boolean;
}

const TechnologiesSection: React.FC<TechnologiesProps> = ({ isDark }) => {
    const technologies = [
        { name: 'HTML5', Icon: HTML5Icon },
        { name: 'CSS3', Icon: CSS3Icon },
        { name: 'JavaScript', Icon: JavaScriptIcon },
        { name: 'Bootstrap', Icon: BootstrapIcon },
        { name: 'Tailwind CSS', Icon: TailwindCSSIcon },
        { name: 'React.js', Icon: ReactIcon },
        { name: 'Vue.js', Icon: VueIcon },
        { name: 'Flutter', Icon: FlutterIcon },
        { name: 'Dart', Icon: DartIcon },
        { name: 'Firebase', Icon: FirebaseIcon },
        { name: 'REST APIs', Icon: RestApiIcon },
        { name: 'SQLite', Icon: SQLiteIcon },
    ];

    return (
        <section className={`py-20 px-4 relative ${isDark ? 'bg-[#000000]' : 'bg-white'}`}>
          
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                    What We Build and How We Build It
                </h2>
                <p className={`text-lg mb-12 max-w-3xl mx-auto ${isDark ? 'text-white' : 'text-black'}`}>
                    From modern web applications to AI-driven platforms, we bring your ideas to life with the latest technologies.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
                    {technologies.map((tech) => (
                        <div key={tech.name} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center justify-center h-32">
                            <div className="h-12 flex items-center justify-center">
                                <tech.Icon />
                            </div>
                            <p className="text-sm font-medium mt-3 text-gray-700">{tech.name}</p>
                        </div>
                    ))}
                </div>

                <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto">
                    Discover more
                    <span className="bg-white/20 rounded-full p-1">
                        <ArrowRight className="w-4 h-4" />
                    </span>
                </button>
            </div>
        </section>
    );
};

export default TechnologiesSection;