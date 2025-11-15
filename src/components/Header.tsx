import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, setIsDark }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full z-50 ${isDark ? 'bg-[#000000]' : 'bg-white/95'} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-16 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <img src="/assets/Logo.png" alt="Logo" className="w-10 h-7 object-fit-cover" />
            </div>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white border-1 rounded-full px-2 py-2">
             <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium transition-all">
              About Us
            </a>
            <a href="#" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isDark ? 'text-black' : 'text-black'}`}>
              Our Process
            </a>
            <a href="#" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isDark ? 'text-black' : 'text-black'}`}>
              Why Us
            </a>
            <a href="#" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isDark ? 'text-black' : 'text-black'}`}>
              Portfolio
            </a>
            <a href="#" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isDark ? 'text-black' : 'text-black'}`}>
              Blogs
            </a>
          </nav>

          {/* Right Side - Theme Toggle & Contact Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button className="hidden md:block bg-blue-500 text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all text-sm font-medium shadow-lg shadow-blue-500/30">
              Contact Us
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <nav className="px-4 py-4 flex flex-col gap-3">
            <a href="#" className="py-2 px-4 bg-blue-500 text-white rounded-lg">Our Process</a>
            <a href="#" className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">What's</a>
            <a href="#" className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Portfolio</a>
            <a href="#" className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">Blog</a>
            <button className="mt-2 bg-blue-500 text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;