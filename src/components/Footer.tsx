import React from 'react';
import { ArrowRight, ArrowUp, Mail, Facebook, Instagram, Linkedin, X } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-16 px-4 md:px-8 font-sans ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Newsletter & Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="w-full md:w-1/3 relative">
          
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full bg-transparent border-b py-3 pr-12 pl-8 focus:outline-none transition-colors ${isDark ? 'border-gray-300 focus:border-white' : 'border-gray-300 focus:border-black'}`}
              />
              <Mail size={20} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Let's talk</h2>
        </div>

        <hr className="border-gray-200 mb-16" />

        {/* Middle Section: Logo, Description, Addresses */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-5">
            <div className="bg-blue-500 text-white rounded-xl p-6 w-48 mb-6 flex flex-col items-center justify-center">
               {/* Custom Logo Representation */}
               <div className="text-4xl font-serif italic mb-1">V</div>
               <div className="text-sm font-bold tracking-widest uppercase">VIJUIT</div>
               <div className="text-[0.5rem] opacity-75">BRINGING DIGITAL DREAMS TO LIFE</div>
            </div>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Loreem sips jmlore mad pas emlore oal okmeft olre mnmad loer.
            </p>
          </div>

          {/* Address Column */}
          <div className="lg:col-span-3 lg:col-start-7">
            <div className="mb-8">
              <h4 className={`font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Address</h4>
              <p className={`text-gray-500 ${isDark ? 'text-white' : 'text-black'}`}>loremispum</p>
            </div>
            <div>
              <h4 className={`font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Address</h4>
              <p className={`text-gray-500 ${isDark ? 'text-white' : 'text-black'}`}>Loreispum lore sipm</p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h4 className={`font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Phone</h4>
              <p className={`text-gray-500 ${isDark ? 'text-white' : 'text-black'}`}>+91 000-000-000</p>
            </div>
            <div>
              <h4 className={`font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Email</h4>
              <p className={`text-gray-500 ${isDark ? 'text-white' : 'text-black'}`}>xyz@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Navigation & Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-8">
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className={`w-10 h-10 border rounded flex items-center justify-center transition-colors ${isDark ? 'border-gray-700 group-hover:border-gray-500' : 'border-gray-300 group-hover:border-gray-500'}`}>
              <ArrowUp size={18} className={`${isDark ? 'text-white group-hover:text-white' : 'text-gray-600 group-hover:text-black'}`} />
            </div>
            <span className={`${isDark ? 'text-white group-hover:text-white' : 'text-gray-600 group-hover:text-black'}`}>Back to top</span>
          </button>

          {/* Navigation Links */}
          <nav className={`flex flex-wrap justify-center gap-8 ${isDark ? 'text-white' : 'text-gray-600'}`}>
            <a href="#" className={`hover:text-black transition-colors ${isDark ? 'hover:text-white' : ''}`}>Home</a>
            <a href="#" className={`hover:text-black transition-colors ${isDark ? 'hover:text-white' : ''}`}>About us</a>
            <a href="#" className={`hover:text-black transition-colors ${isDark ? 'hover:text-white' : ''}`}>Pricing</a>
            <a href="#" className={`hover:text-black transition-colors ${isDark ? 'hover:text-white' : ''}`}>Blogs</a>
            <a href="#" className={`hover:text-black transition-colors ${isDark ? 'hover:text-white' : ''}`}>Contact Us</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { Icon: X, href: '#' },
              { Icon: Facebook, href: '#' },
              { Icon: Instagram, href: '#' },
              { Icon: Linkedin, href: '#' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`w-10 h-10 border rounded-full flex items-center justify-center transition-colors ${isDark ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-200 text-black hover:bg-gray-100'}`}
              >
                <social.Icon size={18} strokeWidth={2.5} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;