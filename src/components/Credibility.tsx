const Credibility = () => {
  const industries = [
    "Technology",
    "Financial Services",
    "Healthcare",
    "Energy & Utilities",
    "Manufacturing",
    "Retail & Consumer",
    "Government & Public Sector",
    "Telecommunications"
  ];

  const stats = [
    { number: "2,000+", label: "Client transformations" },
    { number: "90+", label: "Countries served" },
    { number: "130+", label: "Offices worldwide" },
    { number: "45,000+", label: "Colleagues globally" }
  ];

  return (
    <section className="bg-premium-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Industries We Serve */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-on-black leading-tight mb-6 sm:mb-8">
              Industries
              <span className="font-medium text-gold"> we serve</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-on-black leading-relaxed font-light max-w-3xl">
              We work across sectors to help organizations unlock their potential and drive meaningful impact in their markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="border-l-2 border-gold/30 group-hover:border-gold transition-colors duration-300 pl-4 sm:pl-6 py-3 sm:py-4">
                  <h3 className="text-base sm:text-lg font-medium text-on-black group-hover:text-gold transition-colors">
                    {industry}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-gold/20 pt-12 sm:pt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted-on-black tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <h3 className="text-xl sm:text-2xl font-medium text-on-black mb-4 sm:mb-6">
            Global presence, local expertise
          </h3>
          <p className="text-base sm:text-lg text-muted-on-black font-light max-w-2xl mx-auto">
            Our global network combines deep local knowledge with world-class capabilities, enabling us to serve clients wherever they operate and grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Credibility;