// SVG Icons as components
const PositioningIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const AcquisitionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const RetentionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const Philosophy = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    startIndex: 0,
    skipSnaps: false,
    dragFree: false
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);
  const pillars = [
    {
      title: "Positioning",
      icon: PositioningIcon,
      services: [
        "Sponsorships",
        "Social Media",
        "Commercials (TV & Digital)"
      ],
      description: "Strategic branding that elevates valuation and builds market authority."
    },
    {
      title: "Acquisition", 
      icon: AcquisitionIcon,
      services: [
        "Influencer Marketing",
        "Paid Media",
        "Affiliates"
      ],
      description: "Driving quality traffic and converting first-time depositors."
    },
    {
      title: "Retention",
      icon: RetentionIcon,
      services: [
        "Gamification",
        "Email/SMS Marketing", 
        "Community Building"
      ],
      description: "Programs that increase lifetime value and foster customer loyalty."
    }
  ];

  return (
    <>
      {/* Mobile Version - Keep as separate fullscreen sections */}
      <div className="lg:hidden">
        {/* Approach Section - Mobile Optimized */}
        <section className="bg-gradient-to-br from-white to-gray-50 px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-4xl mx-auto w-full">
            {/* Header - Better mobile spacing */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 leading-tight">
                Our Core
                <br />
                <span className="text-gold">Approach</span>
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Three strategic pillars that drive exceptional iGaming marketing results
              </p>
            </div>

            {/* Content - Stack on mobile, side-by-side on larger screens */}
            <div className="space-y-8 sm:space-y-12">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-4 sm:mb-3">Strategic Foundation</h3>
                <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto sm:mx-0">
                  Three pillars drive effective marketing: <span className="text-gold font-semibold">positioning</span> that builds market authority, <span className="text-gold font-semibold">acquisition</span> that drives sustainable growth, and <span className="text-gold font-semibold">retention</span> that maximizes lifetime value.
                </p>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-4 sm:mb-3">iGaming Expertise</h3>
                <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto sm:mx-0">
                  We work exclusively in iGaming, delivering integrated campaigns that combine compliance excellence with market innovation to build long-term credibility and sustainable competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Carousel Section - Black Background */}
        <section className="liquid-bg px-4 py-8 sm:px-6 sm:py-12 flex flex-col items-center min-h-[80vh]">
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
            {/* Pillar Titles Navigation */}
            <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
              <div className="flex space-x-4 sm:space-x-6 lg:space-x-8">
                {pillars.map((pillar, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    onMouseEnter={() => scrollTo(index)}
                    className={`text-sm sm:text-base lg:text-lg font-medium transition-premium ${
                      selectedIndex === index
                        ? 'text-gold border-b-2 border-gold pb-1'
                        : 'text-muted-on-black hover:text-gold'
                    }`}
                  >
                    {pillar.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Embla Carousel */}
            <div className="flex-1 flex items-center">
              <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="flex">
                  {pillars.map((pillar, index) => (
                    <div 
                      key={index}
                      className="flex-[0_0_100%] min-w-0 px-4"
                    >
                      <div className="max-w-2xl mx-auto">
                        <div className="glass-card group text-center transition-premium p-6 sm:p-8">
                          <div className="mb-6 sm:mb-8 lg:mb-12">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-4 sm:mb-6 lg:mb-8 flex items-center justify-center">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gold/80">
                                <pillar.icon />
                              </div>
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gold mb-4 sm:mb-6 lg:mb-8 leading-tight">
                              {pillar.title}
                            </h3>
                          </div>

                          <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-6 sm:mb-8 lg:mb-12">
                            {pillar.services.map((service, serviceIndex) => (
                              <div
                                key={serviceIndex}
                                className="text-on-black font-semibold text-sm sm:text-base lg:text-lg py-3 sm:py-4 lg:py-5 border-b border-gold/20 hover:border-gold/50 transition-premium"
                              >
                                {service}
                              </div>
                            ))}
                          </div>

                          <p className="text-muted-on-black leading-relaxed text-sm sm:text-base lg:text-lg px-2 sm:px-4 lg:px-0 font-medium">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <div className="flex space-x-3">
                {pillars.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      selectedIndex === index 
                        ? 'bg-gold scale-125' 
                        : 'bg-gold/30 hover:bg-gold/60'
                    }`}
                    aria-label={`Go to ${pillars[index].title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Desktop Version - Separate fullscreen sections */}
      <div className="hidden lg:block">
        {/* Approach Section - Full Screen */}
        <section className="bg-premium-white px-6 py-12 lg:py-16 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 lg:mb-10">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-on-white mb-4 lg:mb-6 leading-tight">
                  Our Core
                  <span className="text-gold block">Approach</span>
                </h2>
                <div className="w-24 lg:w-28 h-1 lg:h-1.5 bg-gold mx-auto"></div>
              </div>

              <div className="space-y-6 lg:space-y-8">
                <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-on-white font-medium text-justify lg:text-center">
                  Three pillars drive effective marketing: positioning, acquisition, and retention. We work exclusively in iGaming, helping clients achieve market leadership through strategic positioning and integrated campaigns.
                </p>

                <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-on-white font-medium text-justify lg:text-center">
                  From sponsorships to social media, every channel serves our unified strategy. We ensure compliant, sustainable growth that builds long-term credibility in the regulated iGaming landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section - Full Screen */}
        <section className="px-6 py-12 lg:py-16 flex items-center" style={{backgroundColor: '#0f0900'}}>
          <div className="max-w-7xl mx-auto w-full">
            {/* Three Pillars Side by Side */}
            <div className="grid grid-cols-3 gap-12 h-full">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="mb-8">
                    <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center text-gold/80">
                      <pillar.icon />
                    </div>
                    <h3 className="text-2xl font-light text-gold mb-8 tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>

                  <div className="space-y-1 mb-8">
                    {pillar.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="glass-input px-3 py-2 text-white/90 text-sm font-light tracking-wide"
                      >
                        {service}
                      </div>
                    ))}
                  </div>

                  <p className="text-white/60 text-sm font-light leading-relaxed tracking-wide">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Philosophy;