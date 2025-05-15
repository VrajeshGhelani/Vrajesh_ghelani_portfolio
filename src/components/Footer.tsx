
import React from 'react';
import { Mail, Phone, Link } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-blue-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Vrajesh Ghelani</h2>
            <p className="text-gray-300">
              Web Developer specializing in creating modern and responsive web applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-300 hover:text-white transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:vrajeshghelani6125@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  vrajeshghelani6125@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+919313735404" className="text-gray-300 hover:text-white transition-colors">
                  (+91) 9313735404
                </a>
              </div>
              <div className="flex items-center">
                <Link size={16} className="mr-2" />
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  @VrajeshGhelani
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Vrajesh Ghelani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
