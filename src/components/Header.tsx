import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import companyLogo from "@/assets/company-logo.jpeg";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-premium-black/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Company Logo */}
          <Link to="/" className="h-16 w-16">
            <img 
              src={companyLogo} 
              alt="Miela Digital Company Logo" 
              className="h-full w-full object-contain hover:opacity-80 transition-opacity"
            />
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('approach')}
              className="text-muted-on-black hover:text-gold transition-premium font-medium"
            >
              Approach
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-on-black hover:text-gold transition-premium font-medium"
            >
              Partners
            </button>
            <Link 
              to="/newsroom"
              className="text-muted-on-black hover:text-gold transition-premium font-medium"
            >
              Newsroom
            </Link>
            <Link 
              to="/affiliate-partnerships"
              className="text-muted-on-black hover:text-gold transition-premium font-medium"
            >
              Affiliates
            </Link>
            <Button 
              variant="premium-outline" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gold hover:text-gold/80 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-premium-black/98 backdrop-blur-sm border-t border-gold/20">
          <nav className="px-6 py-4 space-y-4">
            <button 
              onClick={() => {
                scrollToSection('approach');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-muted-on-black hover:text-gold transition-premium font-medium py-3"
            >
              Approach
            </button>
            <button 
              onClick={() => {
                scrollToSection('about');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-muted-on-black hover:text-gold transition-premium font-medium py-3"
            >
              Partners
            </button>
            <Link 
              to="/newsroom"
              className="block text-muted-on-black hover:text-gold transition-premium font-medium py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Newsroom
            </Link>
            <Link 
              to="/affiliate-partnerships"
              className="block text-muted-on-black hover:text-gold transition-premium font-medium py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Affiliates
            </Link>
            <Button 
              variant="premium-outline" 
              size="sm"
              className="w-full mt-4"
              onClick={() => {
                scrollToSection('contact');
                setMobileMenuOpen(false);
              }}
            >
              Contact
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;