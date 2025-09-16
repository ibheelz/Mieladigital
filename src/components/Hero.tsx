const Hero = () => {
  return (
    <section className="bg-premium-black min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-block fade-in">
                <span className="text-sm font-medium text-gold tracking-wider uppercase">
                  Welcome to
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-on-black leading-[1.1] tracking-tight slide-up delay-100">
                Miela
                <br />
                <span className="font-medium text-gold">Digital</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-muted-on-black leading-relaxed max-w-xl font-light slide-up delay-200">
                We help businesses and public sector organizations navigate their greatest challenges to
                <span className="font-medium text-on-black"> accelerate sustainable and inclusive growth</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 slide-up delay-300">
              <button className="bg-gold text-premium-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-gold/90 hover:scale-105 glow-gold transition-all duration-200">
                GET STARTED
              </button>
              <button className="border border-gold/30 text-gold px-8 py-4 text-sm font-medium tracking-wide hover:border-gold hover:bg-gold/10 hover:scale-105 transition-all duration-200">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="relative hidden lg:block slide-in-right delay-400">
            <div className="aspect-square bg-gradient-to-br from-gold/10 to-gold/5 rounded-full opacity-60 animate-float"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-gold/10 rounded-full transform translate-x-8 translate-y-8 opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-premium-black border border-gold/20 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300 glow-gold">
              <div className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-gold rounded-full flex items-center justify-center group-hover:rotate-12 transition-all duration-300">
                <svg className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 text-premium-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;