import { Button } from "@/components/ui/button";
import stakeLogo from "@/assets/logos/stake.png";
import betssonLogo from "@/assets/logos/betsson.svg";
import xbetLogo from "@/assets/logos/1xbet.png";
import betanoLogo from "@/assets/logos/betano.png";
import parimatchLogo from "@/assets/logos/parimatch.png";
import pinupLogo from "@/assets/logos/pin-up.png";

// Trust Icon Component
const TrustIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline mr-2">
    <path d="M12 2L3 7V12C3 16.55 6.84 20.74 11 21.95C15.16 20.74 19 16.55 19 12V7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Message Icon Component
const MessageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline mr-2">
    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.60467 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 py-20">
      {/* Dark gradient background with yellow and custom blue streaks */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-[#646881]/10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#646881]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-helvetica-neue font-black text-white mb-6 leading-none tracking-tight">
          Strategic
          <br />
          <em className="font-playfair text-gold not-italic">Marketing</em>
          <br />
          for iGaming
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Drive sustainable growth in iGaming with strategic positioning and retention solutions.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-20">
          <button
            onClick={scrollToContact}
            className="glass-button px-8 py-4 text-gold font-semibold hover:bg-yellow-400 hover:text-black hover:font-bold transition-all duration-300 flex items-center"
          >
            <MessageIcon />
            Get Started Today
          </button>
        </div>
      </div>

      {/* Partner Logos - Moved to bottom */}
      <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-400 text-xs mb-6 flex items-center justify-center">
          <TrustIcon />
          Trusted by leading iGaming brands
        </p>
        <div className="overflow-hidden max-w-lg mx-auto">
          <div className="flex items-center gap-8 animate-scroll whitespace-nowrap">
            <img src={stakeLogo} alt="Stake" className="h-5 transition-all" />
            <img src={betssonLogo} alt="Betsson" className="h-5 transition-all" />
            <img src={xbetLogo} alt="1xbet" className="h-5 transition-all" />
            <img src={betanoLogo} alt="Betano" className="h-5 transition-all" />
            <img src={parimatchLogo} alt="Parimatch" className="h-5 transition-all" />
            <img src={pinupLogo} alt="Pin-up" className="h-5 transition-all" />
            {/* Duplicate for seamless loop */}
            <img src={stakeLogo} alt="Stake" className="h-5 transition-all" />
            <img src={betssonLogo} alt="Betsson" className="h-5 transition-all" />
            <img src={xbetLogo} alt="1xbet" className="h-5 transition-all" />
            <img src={betanoLogo} alt="Betano" className="h-5 transition-all" />
            <img src={parimatchLogo} alt="Parimatch" className="h-5 transition-all" />
            <img src={pinupLogo} alt="Pin-up" className="h-5 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;