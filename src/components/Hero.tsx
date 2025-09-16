import { Button } from "@/components/ui/button";
import stakeLogo from "@/assets/logos/stake.png";
import betssonLogo from "@/assets/logos/betsson.svg";
import xbetLogo from "@/assets/logos/1xbet.png";
import betanoLogo from "@/assets/logos/betano.png";
import parimatchLogo from "@/assets/logos/parimatch.png";
import pinupLogo from "@/assets/logos/pin-up.png";

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
            className="glass-button px-8 py-4 text-gold font-semibold hover:bg-yellow-400 hover:text-black hover:font-bold transition-all duration-300"
          >
            Get Started Today
          </button>
        </div>
      </div>

      {/* Partner Logos - Moved to bottom */}
      <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-400 text-xs mb-6">Trusted by leading iGaming brands</p>
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