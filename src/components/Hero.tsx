import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="bg-premium-black min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Luxury abstract background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black/70 to-premium-black/50"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-on-black mb-4 sm:mb-6 leading-tight tracking-tight">
            Strategic
            <span className="block text-gold">Marketing</span>
            for iGaming
          </h1>
          
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-on-black max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Integrated positioning, acquisition, and retention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;