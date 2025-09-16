import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import sbcHeroImage from "@/assets/article-image-new.jpg";
import sigmaAsiaImage from "@/assets/sigma-asia-2025-new.jpg";
import sbcAmericasImage from "@/assets/sbc-americas-2025-new.jpg";
import sigmaAmericasImage from "@/assets/sigma-americas-2025.jpg";
import newsroomBg from "@/assets/newsroom-background.png";

// Standard SVG Icons
const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
);

const Newsroom = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featuredStory = {
    id: 1,
    title: "Strategic Positioning at SBC Summit Lisbon 2025",
    description: "Our participation in Portugal's premier iGaming summit demonstrates our commitment to advancing industry dialogue on strategic positioning, market acquisition, and sustainable growth frameworks.",
    date: "2025-09-02",
    category: "INDUSTRY EVENTS",
    image: sbcHeroImage,
    fullContent: `Lisbon, Portugal – September 2025 – Miela joins SBC Summit Lisbon 2025, positioning itself at the center of strategic conversations that define the future of iGaming markets.

Our participation focuses on three core themes: strategic brand positioning that elevates market authority, acquisition frameworks that drive sustainable growth, and retention models that maximize lifetime value. These integrated approaches represent our commitment to advancing industry standards in regulated environments.

SBC Summit Lisbon serves as a crucial platform for strategic dialogue, bringing together operators, technology innovators, and regulatory leaders. Our involvement reinforces our dedication to thought leadership in compliance-driven market expansion and data-informed decision making.

The summit continues to be instrumental in shaping industry evolution, fostering collaboration that drives innovation while maintaining the highest standards of regulatory compliance and market integrity.`
  };

  const additionalNews = [
    {
      id: 2,
      title: "Gamification Strategy Insights at SiGMA Asia 2025",
      description: "Our CEO Felipe Pastenes addressed critical gamification challenges in Manila, sharing strategic frameworks for sustainable engagement models that drive authentic player value and long-term market success.",
      date: "2025-06-02",
      category: "INDUSTRY EVENTS",
      image: sigmaAsiaImage,
      fullContent: `Manila, Philippines – June 2025 – At SiGMA Asia 2025, CEO Felipe Pastenes contributed to strategic discussions on gamification effectiveness, examining why traditional approaches often fail to deliver sustainable engagement.

Our insights focused on three critical areas: authentic engagement design that aligns with player motivations, sustainable retention models that create genuine value, and compliance-first innovation that builds market trust. These principles reflect our approach to creating gamification strategies that succeed in competitive markets.

The Asia-Pacific region presents unique opportunities for strategic growth, and our participation reinforced our commitment to understanding cultural nuances that drive successful market expansion. We explored partnerships that combine global expertise with local market intelligence.

SiGMA Asia continues to be the definitive platform for strategic dialogue in the region, bringing together visionaries who are shaping the future of interactive entertainment through responsible innovation and market-focused solutions.`
    },
    {
      id: 3,
      title: "Influencer Strategy Leadership at SBC Americas 2025",
      description: "Strategic insights on authentic sports partnerships in Latin America, demonstrating how cultural intelligence and data-driven ambassador programs create sustainable market impact beyond traditional endorsements.",
      date: "2025-05-02",
      category: "INDUSTRY EVENTS",
      image: sbcAmericasImage,
      fullContent: `Miami, USA – May 2025 – Our strategic leadership in Latin American markets took center stage at SBC Summit Americas 2025, where CEO Felipe Pastenes shared insights on transforming sports ambassador partnerships into authentic engagement drivers.

Our proven track record across Peru, Chile, and emerging Latin American markets demonstrates how strategic influencer partnerships transcend traditional endorsements. We design culturally-intelligent campaigns that resonate with local audiences while maintaining compliance standards and measurable ROI objectives.

The discussion highlighted three core principles: authentic partnership selection based on audience alignment, culturally-informed creative strategies that respect local market nuances, and performance frameworks that optimize both reach and conversion metrics. These approaches have consistently delivered market leadership for our partners.

SBC Summit Americas reinforced the Americas as a strategic growth region where cultural understanding meets sophisticated marketing execution. Our participation demonstrated our commitment to advancing industry standards through innovation, compliance excellence, and market-relevant solutions.`
    },
    {
      id: 4,
      title: "Strategic Growth Framework at SiGMA Americas 2025",
      description: "Presenting integrated approaches to Latin American market expansion in São Paulo, focusing on culturally-informed strategies that combine positioning excellence, acquisition efficiency, and retention innovation.",
      date: "2025-04-02",
      category: "INDUSTRY EVENTS",
      image: sigmaAmericasImage,
      fullContent: `São Paulo, Brazil – April 2025 – Our strategic presence at SiGMA Americas 2025 reinforced our position as the leading authority on Latin American market expansion through integrated marketing excellence.

We presented our proven framework combining strategic positioning that builds market authority, acquisition strategies that optimize customer lifetime value, and retention innovations that create sustainable competitive advantages. These approaches have consistently delivered market leadership across diverse regulatory environments.

Latin America represents the fastest-growing region for strategic iGaming expansion, requiring sophisticated understanding of cultural dynamics, regulatory compliance, and consumer behavior patterns. Our participation demonstrated how strategic partnerships can accelerate market entry while maintaining operational excellence.

SiGMA Americas continues to be the definitive platform for regional strategic dialogue, bringing together visionaries who understand that sustainable growth requires the perfect balance of innovation, compliance, and cultural intelligence.`
    }
  ];

  const allNews = [featuredStory, ...additionalNews];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "PARTNERSHIPS":
        return "bg-gold/10 text-gold border-gold/20";
      case "INDUSTRY INSIGHTS":
        return "bg-gold/15 text-gold border-gold/25";
      case "COMPANY UPDATES":
        return "bg-gold/10 text-gold border-gold/20";
      case "INDUSTRY EVENTS":
        return "bg-gold/10 text-gold border-gold/20";
      default:
        return "bg-gold/10 text-gold border-gold/20";
    }
  };

  return (
    <>
      <title>Strategic Insights | Miela Digital - Expert iGaming Perspectives</title>
      <meta name="description" content="Expert insights on iGaming strategy, market trends, and industry evolution from Miela Digital's strategic marketing team." />
      
      <Header />
      
      <main className="min-h-screen bg-premium-black">
        {/* Hero Section with Liquid Glass */}
        <section className="relative overflow-hidden flex items-center justify-center px-4 sm:px-6 py-16" style={{ paddingTop: 'calc(6rem + 2rem)', backgroundColor: '#0f0900' }}>
          {/* Dark Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gold mb-6 leading-tight">
              Blogs
            </h1>
            <p className="text-lg text-muted-on-black max-w-2xl mx-auto leading-relaxed">
              Strategic insights and expert perspectives on iGaming market evolution, innovation trends, and industry developments.
            </p>
          </div>
        </section>


        {/* Articles Grid */}
        <section className="px-4 sm:px-6 py-12" style={{backgroundColor: '#0f0900'}}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {allNews.map((item, index) => (
                <div
                  key={item.id}
                  className="glass-card p-8 group cursor-pointer transition-all duration-500"
                  onClick={() => setSelectedArticle(item)}
                >
                  {/* Article Image */}
                  {item.image && (
                    <div className="mb-6 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  )}

                  {/* Article Content */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center text-muted-on-black text-sm">
                        <CalendarIcon />
                        <span className="ml-2">
                          {new Date(item.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-on-black group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-muted-on-black leading-relaxed text-sm line-clamp-3">
                      {item.description}
                    </p>

                    <button className="glass-button px-6 py-3 text-gold font-semibold hover:bg-yellow-400 hover:text-black hover:font-bold transition-all duration-300 flex items-center gap-2">
                      <span>Read More</span>
                      <ExternalLinkIcon />
                    </button>
                  </div>
                </div>
                ))}
            </div>
          </div>
        </section>

        {/* Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              onClick={() => setSelectedArticle(null)}
            />

            {/* Modal Content */}
            <div className="relative max-w-4xl max-h-[90vh] w-full overflow-y-auto glass-card">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center text-muted-on-black text-sm">
                    <CalendarIcon />
                    <span className="ml-2">
                      {new Date(selectedArticle.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-muted-on-black hover:text-gold transition-colors p-2 rounded-full hover:bg-gold/10"
                  >
                    <CloseIcon />
                  </button>
                </div>

                {/* Article Image */}
                {selectedArticle.image && (
                  <div className="mb-8 overflow-hidden rounded-lg">
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="w-full h-80 sm:h-96 object-cover"
                    />
                  </div>
                )}

                {/* Title */}
                <h1 className="text-3xl font-black text-gold mb-6 leading-tight">
                  {selectedArticle.title}
                </h1>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-muted-on-black leading-relaxed whitespace-pre-line">
                    {selectedArticle.fullContent || selectedArticle.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
};

export default Newsroom;