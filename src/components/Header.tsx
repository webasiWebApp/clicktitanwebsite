import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../assest/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'AI-Optimized SEO', href: '/services/ai-seo' },
        { name: 'AI-Driven Google PPC', href: '/services/ai-ppc' },
        { name: 'AI-Agent Google LSA', href: '/services/ai-lsa' },
        { name: 'AI-Website Design', href: '/services/ai-website' },
        { name: 'AI-Facebook Ads', href: '/services/ai-facebook' },
        { name: 'AI-Powered Scheduling', href: '/services/ai-scheduling' },
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 px-[20px] md:px-[100px]">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center group transition-transform duration-300 hover:scale-105"
          >
           <img src={Logo} alt="Logo" className="w-32 h-auto" />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`text-sm font-medium transition-all duration-300 hover:text-[#00f163] inline-flex items-center ${
                        location.pathname.startsWith(item.href)
                          ? 'text-[#00f163]'
                          : 'text-gray-300'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl py-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className={`block px-4 py-2 text-sm hover:bg-white/5 transition-colors ${
                              location.pathname === subitem.href
                                ? 'text-[#00f163] bg-white/10'
                                : 'text-gray-300'
                            }`}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-all duration-300 hover:text-[#00f163] relative group ${
                      location.pathname === item.href
                        ? 'text-[#00f163]'
                        : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f163] transition-all duration-300 group-hover:w-full ${
                      location.pathname === item.href ? 'w-full' : 'w-0'
                    }`} />
                  </Link>
                )}
              </div>
            ))}
            <a
              href="#book-call"
              className="bg-[#00f163]/90 hover:bg-[#00f163] text-black px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,241,99,0.3)] hover:scale-105"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="flex flex-col space-y-4 p-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg w-full text-left flex items-center justify-between ${
                          location.pathname.startsWith(item.href)
                            ? 'text-[#00f163] bg-white/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 space-y-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              to={subitem.href}
                              className={`block px-4 py-2 text-sm rounded-lg ${
                                location.pathname === subitem.href
                                  ? 'text-[#00f163] bg-white/10'
                                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg block ${
                        location.pathname === item.href
                          ? 'text-[#00f163] bg-white/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="#book-call"
                className="bg-[#00f163]/90 hover:bg-[#00f163] text-black px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 text-center hover:shadow-[0_0_20px_rgba(0,241,99,0.3)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;