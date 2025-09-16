const Philosophy = () => {
  const approaches = [
    {
      number: "01",
      title: "Strategic Positioning",
      description: "We help organizations define their market position and build sustainable competitive advantages through data-driven insights and market analysis.",
      features: ["Market Research", "Brand Strategy", "Competitive Analysis"]
    },
    {
      number: "02",
      title: "Digital Transformation",
      description: "Accelerating digital capabilities and innovation to drive growth in an increasingly connected world through technology integration.",
      features: ["Technology Integration", "Process Innovation", "Digital Strategy"]
    },
    {
      number: "03",
      title: "Sustainable Growth",
      description: "Building resilient business models that create long-term value while addressing environmental and social challenges.",
      features: ["ESG Integration", "Innovation Labs", "Future Planning"]
    }
  ];

  return (
    <section className="bg-premium-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-on-black leading-tight mb-6 sm:mb-8">
            Our
            <span className="font-medium text-gold"> approach</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-on-black leading-relaxed font-light max-w-3xl">
            We help businesses and public sector organizations navigate their greatest challenges to accelerate sustainable and inclusive growth. Our integrated approach combines strategic thinking with practical implementation.
          </p>
        </div>

        {/* Approaches Grid */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {approaches.map((approach, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
              {/* Number */}
              <div className="lg:col-span-2">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-light text-gold/30">
                  {approach.number}
                </span>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-on-black">
                  {approach.title}
                </h3>
                <p className="text-base sm:text-lg text-muted-on-black leading-relaxed font-light">
                  {approach.description}
                </p>
              </div>

              {/* Features */}
              <div className="lg:col-span-4">
                <div className="space-y-3">
                  {approach.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 py-2"
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                      <span className="text-sm font-medium text-muted-on-black tracking-wide">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 lg:mt-24 pt-12 sm:pt-16 border-t border-gold/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-medium text-on-black mb-4 sm:mb-6">
              Ready to accelerate your growth?
            </h3>
            <p className="text-base sm:text-lg text-muted-on-black mb-6 sm:mb-8 font-light">
              Let's discuss how we can help you navigate your greatest challenges and unlock new opportunities.
            </p>
            <button className="bg-gold text-premium-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-gold/90 transition-colors duration-200">
              START THE CONVERSATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;