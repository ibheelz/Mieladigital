import parimatchLogo from "@/assets/logos/parimatch.png";
import betanoLogo from "@/assets/logos/betano.png";
import jugabetLogo from "@/assets/logos/jugabet.png";
import pinUpLogo from "@/assets/logos/pin-up.png";
import xbetLogo from "@/assets/logos/1xbet-cropped.svg";
import stakeLogo from "@/assets/logos/stake-cropped.svg";
import betssonLogo from "@/assets/logos/betsson.svg";

const Credibility = () => {
  const clientLogos = [
    { name: "Parimatch", logo: parimatchLogo },
    { name: "Betano", logo: betanoLogo },
    { name: "Jugabet", logo: jugabetLogo },
    { name: "Pin-Up", logo: pinUpLogo },
    { name: "1xBet", logo: xbetLogo },
    { name: "Stake", logo: stakeLogo },
    { name: "Betsson", logo: betssonLogo }
  ];

  return (
    <section className="bg-premium-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-on-white mb-4">
              Trusted by <span className="text-gold">Industry Leaders</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-on-white">
              Strategic partners across the iGaming ecosystem
            </p>
          </div>
          
          {/* Client Logo Carousel */}
          <div className="overflow-hidden">
            <div className="flex animate-[scroll_20s_linear_infinite] gap-4 sm:gap-6 md:gap-8">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 flex items-center justify-center h-16 sm:h-20 w-32 sm:w-40 md:w-48 px-3 sm:px-4 md:px-6 rounded-lg border border-gray-200/50 hover:border-gold/30 transition-premium bg-white"
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className={`object-contain hover:scale-105 transition-premium ${client.name === 'Stake' ? 'max-h-8 sm:max-h-10 md:max-h-12 max-w-24 sm:max-w-28 md:max-w-32 m-1 sm:m-2' : client.name === 'Pin-Up' ? 'max-h-10 sm:max-h-11 md:max-h-12 max-w-24 sm:max-w-28 md:max-w-32' : 'max-h-full max-w-full'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;