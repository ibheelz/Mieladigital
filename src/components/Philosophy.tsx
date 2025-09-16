import positioningIcon from "@/assets/positioning-icon.png";
import acquisitionIcon from "@/assets/acquisition-icon-updated.png";
import retentionIcon from "@/assets/retention-icon-updated.png";
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
      icon: positioningIcon,
      services: [
        "Sponsorships",
        "Social Media",
        "Commercials (TV & Digital)"
      ],
      description: "Strategic branding that elevates valuation, builds market credibility, and establishes authority."
    },
    {
      title: "Acquisition", 
      icon: acquisitionIcon,
      services: [
        "Influencer Marketing",
        "Paid Media",
        "Affiliates"
      ],
      description: "Driving quality traffic, converting first-time depositors, and capturing market share."
    },
    {
      title: "Retention",
      icon: retentionIcon,
      services: [
        "Gamification",
        "Email/SMS Marketing", 
        "Community Building"
      ],
      description: "Comprehensive retention programs that increase lifetime value and foster long-term customer loyalty."
    }
  ];

  return (
    <>
      {/* Mobile Version - Keep as separate fullscreen sections */}
      <div className="lg:hidden">
        {/* Approach Section - White Background - Full Screen */}
        <section className="min-h-screen bg-premium-white px-3 py-8 sm:px-6 sm:py-16 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-4 sm:mb-16 lg:mb-20">
                <h2 className="text-6xl sm:text-4xl font-black text-on-white mb-2 sm:mb-8 leading-tight">
                  Our Core
                  <span className="text-gold block">Approach</span>
                </h2>
                <div className="w-28 sm:w-20 md:w-24 h-1.5 bg-gold mx-auto"></div>
              </div>

              <div className="space-y-3 sm:space-y-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-2xl sm:text-lg leading-relaxed text-on-white font-semibold mb-3 sm:mb-8 text-left sm:text-justify">
                    At the core of every effective marketing strategy are three pillars: positioning, 
                    acquisition, and retention. We work exclusively in the iGaming industry, positioning 
                    our clients to achieve high market share by defining how they are perceived, where 
                    they appear, and what they stand for.
                  </p>
                  
                  <p className="text-2xl sm:text-lg leading-relaxed text-on-white font-semibold text-left sm:text-justify">
                    Every channel we activate, from sponsorships to social, from email to community, 
                    serves the overall strategy. Everything is grounded in insights and market fit, 
                    ensuring that growth is not fragmented but integrated, aligned, and sustainable. 
                    We understand the regulatory landscape of iGaming, ensuring that every initiative 
                    is compliant, responsible, and built to reinforce long-term credibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Carousel Section - Black Background */}
        <section className="min-h-screen bg-premium-black px-3 py-8 sm:px-6 sm:py-16 flex flex-col items-center">
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
            {/* Pillar Titles Navigation */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="flex space-x-6 sm:space-x-8">
                {pillars.map((pillar, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    onMouseEnter={() => scrollTo(index)}
                    className={`text-base sm:text-lg font-medium transition-premium ${
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
                        <div className="group text-center transition-premium">
                          <div className="mb-4 sm:mb-12">
                            <div className="w-32 h-32 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-8 flex items-center justify-center">
                              <img 
                                src={pillar.icon} 
                                alt={`${pillar.title} icon`}
                                className="w-28 h-28 sm:w-18 sm:h-18 object-contain"
                              />
                            </div>
                            <h3 className="text-5xl sm:text-3xl font-black text-gold mb-3 sm:mb-8 leading-tight">
                              {pillar.title}
                            </h3>
                          </div>

                          <div className="space-y-3 sm:space-y-6 mb-4 sm:mb-12">
                            {pillar.services.map((service, serviceIndex) => (
                              <div 
                                key={serviceIndex}
                                className="text-on-black font-semibold text-2xl sm:text-lg py-5 border-b border-gold/20 hover:border-gold/50 transition-premium"
                              >
                                {service}
                              </div>
                            ))}
                          </div>

                          <p className="text-muted-on-black leading-relaxed text-2xl sm:text-lg px-1 sm:px-0 font-medium">
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
        <section className="min-h-screen bg-premium-white px-6 py-16 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-12">
                <h2 className="text-4xl font-black text-on-white mb-8 leading-tight">
                  Our Core
                  <span className="text-gold block">Approach</span>
                </h2>
                <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
              </div>

              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-on-white font-medium text-justify">
                  At the core of every effective marketing strategy are three pillars: positioning, 
                  acquisition, and retention. We work exclusively in the iGaming industry, positioning 
                  our clients to achieve high market share by defining how they are perceived, where 
                  they appear, and what they stand for.
                </p>
                
                <p className="text-lg leading-relaxed text-on-white font-medium text-justify">
                  Every channel we activate, from sponsorships to social, from email to community, 
                  serves the overall strategy. Everything is grounded in insights and market fit, 
                  ensuring that growth is not fragmented but integrated, aligned, and sustainable. 
                  We understand the regulatory landscape of iGaming, ensuring that every initiative 
                  is compliant, responsible, and built to reinforce long-term credibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section - Full Screen */}
        <section className="min-h-screen bg-premium-black px-6 py-16 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            {/* Three Pillars Side by Side */}
            <div className="grid grid-cols-3 gap-12 h-full">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="mb-8">
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <img 
                        src={pillar.icon} 
                        alt={`${pillar.title} icon`}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-gold mb-6 leading-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pillar.services.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex}
                        className="text-on-black font-medium text-base py-3 border-b border-gold/20 hover:border-gold/50 transition-premium"
                      >
                        {service}
                      </div>
                    ))}
                  </div>

                  <p className="text-muted-on-black leading-relaxed text-lg">
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