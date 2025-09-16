import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-premium-black/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Company Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-premium-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-medium text-on-black tracking-tight">
              Miela Digital
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <span className="text-sm font-medium text-gold tracking-wider uppercase">
              Korea
            </span>
            <div className="w-px h-4 bg-gold/30"></div>
            <button
              onClick={() => scrollToSection('approach')}
              className="text-sm font-medium text-muted-on-black hover:text-on-black transition-colors tracking-wide"
            >
              Our work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-muted-on-black hover:text-on-black transition-colors tracking-wide"
            >
              Industries
            </button>
            <Link
              to="/newsroom"
              className="text-sm font-medium text-muted-on-black hover:text-on-black transition-colors tracking-wide"
            >
              Insights
            </Link>
            <Link
              to="/affiliate-partnerships"
              className="text-sm font-medium text-muted-on-black hover:text-on-black transition-colors tracking-wide"
            >
              Careers
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-muted-on-black hover:text-on-black transition-colors tracking-wide"
            >
              About us
            </Link>
            <div className="flex items-center space-x-4 ml-6 xl:ml-8">
              <button className="text-sm font-medium text-muted-on-black hover:text-gold transition-colors">
                Sign In
              </button>
              <span className="text-gold/30">|</span>
              <button className="text-sm font-medium text-muted-on-black hover:text-gold transition-colors">
                Subscribe
              </button>
            </div>
          </nav>

          {/* Search Icon */}
          <button className="hidden lg:block p-2">
            <svg className="w-5 h-5 text-muted-on-black hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col w-6 h-5 justify-between"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`h-0.5 w-full bg-gold transition-all duration-300 ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-gold transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-gold transition-all duration-300 ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-premium-black/98 backdrop-blur-sm border-t border-gold/20">
          <nav className="px-4 sm:px-6 py-6 space-y-6">
            <button
              onClick={() => {
                scrollToSection('approach');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-muted-on-black hover:text-on-black font-medium py-2"
            >
              Our work
            </button>
            <button
              onClick={() => {
                scrollToSection('about');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-muted-on-black hover:text-on-black font-medium py-2"
            >
              Industries
            </button>
            <Link
              to="/newsroom"
              className="block text-muted-on-black hover:text-on-black font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              to="/affiliate-partnerships"
              className="block text-muted-on-black hover:text-on-black font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <div className="pt-4 border-t border-gold/20 space-y-4">
              <button className="block text-sm text-muted-on-black hover:text-gold">
                Sign In
              </button>
              <button className="block text-sm text-muted-on-black hover:text-gold">
                Subscribe
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;