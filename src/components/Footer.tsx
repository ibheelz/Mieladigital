import { Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Golden divider line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <footer className="bg-premium-black text-premium-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4">
              {/* Email */}
              <a 
                href="mailto:contact@mieladigital.com"
                className="flex items-center gap-2 text-sm transition-premium hover:text-gold group"
              >
                <Mail size={16} className="group-hover:text-gold transition-premium" />
                contact@mieladigital.com
              </a>
              
              {/* Social icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/mieladigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-premium-white/10 hover:bg-gold/20 transition-premium group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-premium-white group-hover:text-gold transition-premium" />
                </a>
                
                <a
                  href="https://www.instagram.com/mieladigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-premium-white/10 hover:bg-gold/20 transition-premium group"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="text-premium-white group-hover:text-gold transition-premium" />
                </a>
              </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;