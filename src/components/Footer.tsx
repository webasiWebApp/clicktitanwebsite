import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from '../assest/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4 px-[20px] md:px-[100px] pt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
             <img src={Logo} alt="Logo" className="w-32 h-auto" />
            </Link>
            <p className="mt-4 text-gray-400">
              Revolutionizing roofing marketing with AI-powered solutions that deliver better results for less.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacyPolicy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/termofuse" className="text-gray-400 hover:text-white transition-colors">Term of Use</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">AI-Optimized SEO</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Automated Social Media</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Lead Generation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">AI Marketing Audit</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400">
              Email: contact@clicktitan.ai<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ClickTitan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;