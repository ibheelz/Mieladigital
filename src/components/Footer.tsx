import { Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-premium-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-premium-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-medium text-on-black tracking-tight">
                Miela Digital
              </span>
            </div>
            <p className="text-muted-on-black font-light leading-relaxed max-w-md mb-6">
              We help businesses and public sector organizations navigate their greatest challenges to accelerate sustainable and inclusive growth.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/mieladigital"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-gold group-hover:text-gold transition-colors" />
              </a>

              <a
                href="https://www.instagram.com/mieladigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-200 group"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-gold group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-on-black hover:text-on-black transition-colors font-light">
                  Strategic Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-on-black hover:text-on-black transition-colors font-light">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-on-black hover:text-on-black transition-colors font-light">
                  Growth Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-on-black hover:text-on-black transition-colors font-light">
                  Market Research
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@mieladigital.com"
                className="flex items-start gap-2 text-muted-on-black hover:text-on-black transition-colors group font-light"
              >
                <Mail size={16} className="mt-0.5 group-hover:text-gold transition-colors" />
                <span>contact@mieladigital.com</span>
              </a>

              <div className="text-muted-on-black font-light">
                <p>Seoul, South Korea</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-on-black font-light">
              © 2024 Miela Digital. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-on-black hover:text-on-black transition-colors font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-on-black hover:text-on-black transition-colors font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;