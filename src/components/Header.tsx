
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-portfolio-blue-dark">
              <a href="#hero">VG</a>
            </h1>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-portfolio-blue-light hover:text-portfolio-accent font-medium transition-colors duration-200">
              About
            </a>
            <a href="#skills" className="text-portfolio-blue-light hover:text-portfolio-accent font-medium transition-colors duration-200">
              Skills
            </a>
            <a href="#projects" className="text-portfolio-blue-light hover:text-portfolio-accent font-medium transition-colors duration-200">
              Projects
            </a>
            <a href="#education" className="text-portfolio-blue-light hover:text-portfolio-accent font-medium transition-colors duration-200">
              Education
            </a>
            <a href="#achievements" className="text-portfolio-blue-light hover:text-portfolio-accent font-medium transition-colors duration-200">
              Achievements
            </a>
            <a href="#contact" className="text-portfolio-blue-light hover:text-portfolio-accent font-medium transition-colors duration-200">
              Contact
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-portfolio-blue-light hover:text-portfolio-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="block px-3 py-2 rounded-md text-base font-medium text-portfolio-blue-light hover:text-portfolio-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-portfolio-blue-light hover:text-portfolio-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#education" 
              className="block px-3 py-2 rounded-md text-base font-medium text-portfolio-blue-light hover:text-portfolio-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Education
            </a>
            <a 
              href="#achievements" 
              className="block px-3 py-2 rounded-md text-base font-medium text-portfolio-blue-light hover:text-portfolio-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Achievements
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-portfolio-blue-light hover:text-portfolio-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
