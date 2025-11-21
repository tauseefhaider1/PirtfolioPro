import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'SkillsPage', href: '#skills' },
  { name: 'Contact', href: '#contact' }, 
  { name: 'Footer', href: '#footer' },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Highlight active section
      const sections = navLinks.map(link => document.querySelector(link.href));
      sections.forEach((section, i) => {
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveLink(navLinks[i].name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href, name) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(name);
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 backdrop-blur-xl border-b border-white/30 transition-all duration-300 ${
        isScrolled ? 'bg-white/40 shadow-md' : 'bg-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover-scale"
        >
          MyPortfolio
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <button
                onClick={() => handleClick(link.href, link.name)}
                className={`relative font-medium transition-all duration-200 hover-scale ${
                  activeLink === link.name ? 'text-purple-500' : 'text-gray-900 hover:text-purple-500'
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 rounded underline-animate" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="focus:outline-none hover-scale">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/40 backdrop-blur-xl border-t border-white/30 slide-down">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map(link => (
              <li key={link.name}>
                <button
                  onClick={() => handleClick(link.href, link.name)}
                  className={`text-lg font-medium transition-all duration-200 ${
                    activeLink === link.name ? 'text-purple-500' : 'text-gray-900 hover:text-purple-500'
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;