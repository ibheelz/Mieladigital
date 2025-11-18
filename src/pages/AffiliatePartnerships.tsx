import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Globe, TrendingUp, MessageCircle, Target, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

type Language = 'en' | 'es';

const AffiliatePartnerships = () => {
  const [language, setLanguage] = useState<Language>('es'); // Spanish by default

  const t = (key: string, translations: { en: string; es: string }) => {
    return translations[language] || translations.en;
  };

  return (
    <div className="min-h-screen bg-premium-black">
      <Header />
      
      {/* Language Toggle - Fixed Position */}
      <div className="fixed top-24 right-4 z-40">
        <div className="flex items-center space-x-2 bg-premium-black/90 backdrop-blur-sm border border-gold/20 rounded-lg p-2">
          <Button
            variant={language === 'en' ? 'premium-outline' : 'ghost'}
            size="sm"
            onClick={() => setLanguage('en')}
            className="h-8 px-3 text-sm"
          >
            EN
          </Button>
          <Button
            variant={language === 'es' ? 'premium-outline' : 'ghost'}
            size="sm"
            onClick={() => setLanguage('es')}
            className="h-8 px-3 text-sm"
          >
            ES
          </Button>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="bg-premium-black min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black/90 to-premium-black/70"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-on-black mb-4 sm:mb-6 leading-tight tracking-tight">
              {t('hero.title1', { en: 'Partner With', es: 'Asóciate con' })}
              <span className="block text-gold">Miela</span>
            </h1>
            
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl text-muted-on-black leading-relaxed font-medium">
                {t('hero.subtitle', {
                  en: 'We build sustainable, data-driven partnerships in the iGaming industry. Join us to expand your reach, strengthen credibility, and grow together.',
                  es: 'Creamos asociaciones sostenibles basadas en datos dentro de la industria iGaming. Únete a nosotros para ampliar tu alcance, fortalecer tu credibilidad y crecer juntos.'
                })}
              </p>
            </div>
            
            <div className="mt-8 sm:mt-10">
              <Link to="/#contact">
                <Button 
                  variant="premium-outline" 
                  size="lg" 
                  className="h-14 px-8 text-lg font-semibold"
                  onClick={() => {
                    // Navigate to homepage and scroll to contact
                    window.location.href = '/#contact';
                  }}
                >
                  {t('hero.cta', { en: 'Start Your Partnership', es: 'Inicia Tu Colaboración' })}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-premium-black px-4 sm:px-6 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-4">
              {t('benefits.title', { en: 'Why Partner With Us', es: 'Por Qué Asociarte Con Nosotros' })}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <Card className="bg-premium-black border border-gold/20 p-8 hover:border-gold/40 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-on-black mb-4">
                  {t('benefits.card1.title', { en: 'Trusted Reputation', es: 'Reputación Confiable' })}
                </h3>
                <p className="text-muted-on-black leading-relaxed">
                  {t('benefits.card1.description', {
                    en: 'We work exclusively in regulated markets, ensuring compliance and building credibility.',
                    es: 'Trabajamos exclusivamente en mercados regulados, garantizando cumplimiento y credibilidad.'
                  })}
                </p>
              </div>
            </Card>

            {/* Benefit Card 2 */}
            <Card className="bg-premium-black border border-gold/20 p-8 hover:border-gold/40 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-on-black mb-4">
                  {t('benefits.card2.title', { en: 'Market Reach', es: 'Alcance de Mercado' })}
                </h3>
                <p className="text-muted-on-black leading-relaxed">
                  {t('benefits.card2.description', {
                    en: 'Our network spans operators, affiliates, and influencers across Latin America and beyond.',
                    es: 'Nuestra red incluye operadores, afiliados e influencers en América Latina y más allá.'
                  })}
                </p>
              </div>
            </Card>

            {/* Benefit Card 3 */}
            <Card className="bg-premium-black border border-gold/20 p-8 hover:border-gold/40 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-on-black mb-4">
                  {t('benefits.card3.title', { en: 'Innovative Strategies', es: 'Estrategias Innovadoras' })}
                </h3>
                <p className="text-muted-on-black leading-relaxed">
                  {t('benefits.card3.description', {
                    en: 'We combine positioning, acquisition, and retention for integrated growth.',
                    es: 'Combinamos posicionamiento, adquisición y retención para un crecimiento integrado.'
                  })}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-premium-black px-4 sm:px-6 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-4">
              {t('process.title', { en: 'Our Process', es: 'Nuestro Proceso' })}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Process Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold/20">
                <MessageCircle className="w-10 h-10 text-gold" />
              </div>
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-premium-black font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-on-black mb-4">
                {t('process.step1.title', { en: 'Contact', es: 'Contacto' })}
              </h3>
              <p className="text-muted-on-black leading-relaxed">
                {t('process.step1.description', {
                  en: 'Reach out through our contact form to explore collaboration opportunities.',
                  es: 'Escríbenos a través de nuestro formulario de contacto para explorar oportunidades de colaboración.'
                })}
              </p>
            </div>

            {/* Process Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold/20">
                <Target className="w-10 h-10 text-gold" />
              </div>
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-premium-black font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-on-black mb-4">
                {t('process.step2.title', { en: 'Strategy Alignment', es: 'Alineación de Estrategia' })}
              </h3>
              <p className="text-muted-on-black leading-relaxed">
                {t('process.step2.description', {
                  en: 'We define shared goals and map the most effective channels for success.',
                  es: 'Definimos objetivos comunes y trazamos los canales más efectivos para lograr resultados.'
                })}
              </p>
            </div>

            {/* Process Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold/20">
                <Rocket className="w-10 h-10 text-gold" />
              </div>
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-premium-black font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-on-black mb-4">
                {t('process.step3.title', { en: 'Launch', es: 'Lanzamiento' })}
              </h3>
              <p className="text-muted-on-black leading-relaxed">
                {t('process.step3.description', {
                  en: 'Together we activate campaigns that are compliant, measurable, and impactful.',
                  es: 'Activamos campañas conjuntas que cumplen con la normativa, son medibles y generan impacto.'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-premium-black px-4 sm:px-6 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-on-black mb-8">
            {t('cta.title', { en: 'Ready to collaborate?', es: '¿Listo para colaborar?' })}
          </h2>
          
          <Link to="/#contact">
            <Button 
              variant="premium-outline" 
              size="lg" 
              className="h-14 px-8 text-lg font-semibold"
              onClick={() => {
                // Navigate to homepage and scroll to contact
                window.location.href = '/#contact';
              }}
            >
              {t('cta.button', { en: 'Partner With Miela', es: 'Asóciate con Miela' })}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AffiliatePartnerships;