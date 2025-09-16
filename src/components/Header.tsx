import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import companyLogo from "@/assets/company-logo.jpeg";

// SVG Icon Components
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
    />
  </svg>
);

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // If not on homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
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
      // Already on homepage, just scroll
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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xl px-4">
      <div className="glass-nav rounded-2xl px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Company Logo */}
          <Link to="/" className="flex items-center">
            <img src={companyLogo} alt="Miela" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <nav className="flex items-center space-x-8">
              <Link
                to="/"
                className={`transition-all font-medium text-xs uppercase tracking-widest ${
                  location.pathname === '/'
                    ? 'text-yellow-400'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection('approach')}
                className="text-gray-300 hover:text-yellow-400 transition-all font-medium text-xs uppercase tracking-widest"
              >
                About
              </button>
              <Link
                to="/newsroom"
                className="text-gray-300 hover:text-yellow-400 transition-all font-medium text-xs uppercase tracking-widest"
              >
                Blogs
              </Link>
            </nav>
          </div>

          {/* Desktop Contact Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block glass-button px-3 py-1.5 text-gold font-medium hover:bg-yellow-400 hover:text-black hover:font-bold transition-all text-xs uppercase tracking-widest"
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold hover:text-gold/80 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <HamburgerIcon isOpen={mobileMenuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border border-white/10 mt-2 rounded-lg">
          <nav className="px-4 py-3 space-y-1">
            <Link
              to="/"
              className={`block py-2 px-3 rounded transition-all font-medium text-sm ${
                location.pathname === '/'
                  ? 'text-yellow-400 bg-yellow-400/10'
                  : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => {
                scrollToSection('approach');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-all font-medium text-sm"
            >
              About
            </button>
            <Link
              to="/newsroom"
              className="block py-2 px-3 rounded text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-all font-medium text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <div className="pt-2 mt-2 border-t border-white/10">
              <button
                className="block w-full py-2 px-3 rounded bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400 hover:text-black font-medium text-sm transition-all"
                onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
              >
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;