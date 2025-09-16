import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import { ArrowLeft, Calendar, Mail, Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import sbcHeroImage from "@/assets/article-image-new.jpg";
import sigmaAsiaImage from "@/assets/sigma-asia-2025-new.jpg";
import sbcAmericasImage from "@/assets/sbc-americas-2025-new.jpg";
import sigmaAmericasImage from "@/assets/sigma-americas-2025.jpg";
import newsroomBg from "@/assets/newsroom-background.png";

const Newsroom = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredStory = {
    id: 1,
    title: "Miela Confirms Participation at SBC Summit Lisbon 2025",
    description: "Lisbon, Portugal – September 2025 – Miela has confirmed its participation at the upcoming SBC Summit Lisbon 2025, a leading international event for the iGaming industry. The conference will gather operators, affiliates, technology providers, and regulators to discuss the future of the sector.",
    date: "2025-09-02",
    category: "INDUSTRY EVENTS",
    image: sbcHeroImage,
    fullContent: `Lisbon, Portugal – September 2025 – Miela has confirmed its participation at the upcoming SBC Summit Lisbon 2025, a leading international event for the iGaming industry. The conference will gather operators, affiliates, technology providers, and regulators to discuss the future of the sector.

Miela will join the summit to engage with peers and stakeholders on key themes shaping the iGaming landscape. The company will contribute its perspective on brand positioning, market acquisition, and player retention, with a focus on integrated strategies that support sustainable growth in regulated environments.

The SBC Summit Lisbon has established itself as one of the central forums for dialogue within iGaming, offering a platform for knowledge exchange and industry collaboration. By participating, Miela reinforces its commitment to being part of the conversation around innovation, compliance, and the evolution of market strategies.

About SBC Summit Lisbon
The SBC Summit Lisbon 2025 is set to host thousands of industry professionals, featuring panels, exhibitions, and networking opportunities. The event continues to play a pivotal role in shaping industry discourse and fostering meaningful connections across the iGaming ecosystem.`
  };

  const additionalNews = [
    {
      id: 2,
      title: "Miela CEO Felipe Pastenes Spoke at SiGMA Asia 2025",
      description: "Manila, Philippines – June 2025 – Miela participated in SiGMA Asia 2025, where CEO Felipe Pastenes joined a featured panel discussion on \"Why Gamification Strategies Fail.\" The panel brought together industry leaders to examine the challenges behind gamification in iGaming, addressing issues of design, player expectations, and market execution.",
      date: "2025-06-02",
      category: "INDUSTRY EVENTS",
      image: sigmaAsiaImage, // Use specific SiGMA Asia image
      fullContent: `Manila, Philippines – June 2025 – Miela participated in SiGMA Asia 2025, where CEO Felipe Pastenes joined a featured panel discussion on "Why Gamification Strategies Fail." The panel brought together industry leaders to examine the challenges behind gamification in iGaming, addressing issues of design, player expectations, and market execution.

Pastenes shared insights on why certain strategies fall short and how operators can rethink engagement models to create lasting value and sustainable growth. His contribution reflected Miela's ongoing commitment to advancing dialogue on innovation and responsible practices within the global gaming sector.

Alongside the panel appearance, Miela connected with peers, regulators, and partners throughout the event to explore opportunities in Asia's fast-developing markets. The company highlighted its integrated approach to market expansion, player retention, and compliance-driven innovation.

As one of the premier forums in the region, SiGMA Asia once again proved to be a platform for forward-looking discussion and collaboration. Miela's presence reinforced its ambition to remain at the forefront of conversations shaping the future of iGaming.

About SiGMA Asia
SiGMA Asia 2025 took place in Manila, Philippines, drawing thousands of professionals from across the globe. The event combined exhibitions, networking, and knowledge-sharing sessions, making it a central hub for decision-makers shaping the future of gaming in Asia and beyond.`
    },
    {
      id: 3,
      title: "Miela Joined SBC Summit Americas 2025 Panel on Sports Talents",
      description: "Miami, USA – May 2025 – Miela participated in SBC Summit Americas 2025, where CEO Felipe Pastenes was invited to join the panel \"Sports Ambassadors and Influencers in the Industry in Latin America.\" The discussion explored how partnerships with athletes and influencers are reshaping iGaming engagement strategies across the region.",
      date: "2025-05-02",
      category: "INDUSTRY EVENTS", 
      image: sbcAmericasImage,
      fullContent: `Miami, USA – May 2025 – Miela participated in SBC Summit Americas 2025, where CEO Felipe Pastenes was invited to join the panel "Sports Ambassadors and Influencers in the Industry in Latin America." The discussion explored how partnerships with athletes and influencers are reshaping iGaming engagement strategies across the region.

With campaigns in Peru, Chile, and other Latin American markets, Miela has established itself as a specialist in influencer-led strategies. The company has worked with sports figures and digital creators to design initiatives that go beyond simple endorsements, creating authentic connections with local audiences. By leveraging cultural insights and data-driven planning, Miela has helped operators build credibility, expand reach, and achieve measurable impact in highly competitive markets.

At SBC Summit Americas, Pastenes shared Miela's perspective on why influencer campaigns succeed or fail, and how operators can design partnerships that are both compliant and sustainable. His participation underscored Miela's role as a thought leader in aligning global best practices with the unique dynamics of Latin American consumer culture.

Beyond the panel, Miela connected with stakeholders from across the Americas to exchange knowledge and explore opportunities for collaboration. The company's participation reflected its broader commitment to supporting the evolution of iGaming through strategies that combine innovation, trust, and market relevance.

As one of the leading gatherings in the region, SBC Summit Americas once again provided a stage for meaningful dialogue, collaboration, and growth. Miela's involvement highlighted its ambition to remain at the center of conversations that shape the future of sports betting and iGaming in Latin America and beyond.

About SBC Summit Americas
SBC Summit Americas 2025 took place in Miami, USA, bringing together thousands of operators, affiliates, suppliers, and regulators from across North and South America. The event featured a comprehensive program of panels, exhibitions, and networking opportunities, making it a central hub for collaboration and industry development.`
    },
    {
      id: 4,
      title: "Miela Participated in SiGMA Americas 2025",
      description: "São Paulo, Brazil – April 2025 – Miela participated in SiGMA Americas 2025, one of the region's most influential gatherings for the iGaming and sports betting industry. The event brought together operators, affiliates, regulators, and technology providers to discuss the opportunities and challenges shaping Latin America's fast-evolving markets.",
      date: "2025-04-02",
      category: "INDUSTRY EVENTS",
      image: sigmaAmericasImage, // Use specific SiGMA Americas image
      fullContent: `São Paulo, Brazil – April 2025 – Miela participated in SiGMA Americas 2025, one of the region's most influential gatherings for the iGaming and sports betting industry. The event brought together operators, affiliates, regulators, and technology providers to discuss the opportunities and challenges shaping Latin America's fast-evolving markets.

At the summit, Miela contributed its perspective on how integrated strategies in brand positioning, acquisition, and retention can support sustainable growth in regulated environments. The company emphasized its experience in developing culturally relevant campaigns, executing compliance-aligned strategies, and applying data-driven insights to strengthen credibility and long-term market value.

Miela's participation also highlighted its role as a trusted partner to operators seeking to expand across Latin America. By engaging with stakeholders throughout the event, the company reinforced its commitment to innovation, collaboration, and advancing industry standards across the iGaming ecosystem.

About SiGMA Americas
SiGMA Americas 2025 took place in São Paulo, Brazil, hosting thousands of professionals from across the global gaming ecosystem. The event featured a wide-ranging program of panels, exhibitions, and networking opportunities, positioning itself as a key platform for knowledge sharing and industry development in Latin America.`
    }
  ];

  const allNews = [featuredStory, ...additionalNews];
  const categories = ["All", "INDUSTRY EVENTS", "PARTNERSHIPS", "COMPANY UPDATES", "INDUSTRY INSIGHTS"];
  
  const filteredNews = activeFilter === "All" 
    ? allNews 
    : allNews.filter(item => item.category === activeFilter);

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
      <title>Newsroom | Miela Digital - Latest Updates & Industry Insights</title>
      <meta name="description" content="Stay updated with Miela Digital's latest partnerships, industry insights, and company updates in the iGaming marketing space." />
      
      <Header />
      
      <main className="min-h-screen bg-premium-black">
        {/* Editorial Header */}
        <section className="py-12 px-6 border-b border-gold/10 relative overflow-hidden" style={{ paddingTop: 'calc(6rem + 3rem)', display: 'flex', alignItems: 'center', minHeight: 'calc(6rem + 6rem)' }}>
          <div className="absolute inset-0">
            <img 
              src={newsroomBg} 
              alt="Newsroom background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-premium-black/80"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="max-w-4xl">
              <h1 className="text-6xl font-black text-on-black leading-tight">
                Newsroom
              </h1>
            </div>
          </div>
        </section>

        {/* Tag Filter */}
        <section className="py-4 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeFilter === category 
                      ? "bg-gold/20 text-gold border border-gold/40" 
                      : "bg-premium-black/60 text-muted-on-black border border-gold/10 hover:bg-gold/10 hover:text-gold hover:border-gold/30"
                  }`}
                  style={{ fontSize: '10px' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Articles */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            {filteredNews.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-on-black text-lg font-light">
                  No articles found for "{activeFilter}"
                </p>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredNews.map((item, index) => (
                  <Card 
                    key={item.id} 
                    className={`bg-premium-black border-gold/20 overflow-hidden group hover:border-gold/40 transition-all duration-500 animate-fade-in ${
                      index === 0 ? 'featured-card' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.category === "INDUSTRY EVENTS" && item.image ? (
                      // Event article with image
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:h-96">
                        <div className="relative lg:overflow-hidden lg:h-full bg-premium-black lg:mx-0">
                          {/* Full-bleed image wrapper for mobile/tablet */}
                          <div className="relative w-screen left-1/2 -translate-x-1/2 lg:w-full lg:left-0 lg:translate-x-0 lg:h-full overflow-hidden bg-premium-black">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className={`w-full h-auto min-h-96 lg:h-full object-contain lg:object-cover ${
                                item.id === 3 ? 'lg:object-left-center' : 'lg:object-right-center'
                              }`}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-premium-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-premium-black/20"></div>
                        </div>
                        
                        <CardHeader className="p-12 flex flex-col justify-center">
                          <div className="flex items-center justify-between mb-6">
                            <Badge variant="outline" className={`${getCategoryColor(item.category)} text-xs font-medium tracking-wider`}>
                              {item.category}
                            </Badge>
                            <div className="flex items-center text-muted-on-black text-sm font-light">
                              <Calendar className="w-4 h-4 mr-2" />
                              {new Date(item.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long'
                              })}
                            </div>
                          </div>
                          
                          <CardTitle className="text-3xl font-bold text-on-black mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                            {item.title}
                          </CardTitle>
                          
                          <CardDescription className="text-muted-on-black text-base leading-relaxed mb-8">
                            {item.description}
                          </CardDescription>
                          
                          <div className="flex gap-4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="premium-outline" size="sm" className="group/btn">
                                  Read Full Article
                                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-premium-black border-gold/20">
                                <DialogHeader>
                                  <div className="flex items-center justify-between mb-4">
                                    <Badge variant="outline" className={`${getCategoryColor(item.category)} text-xs font-medium tracking-wider`}>
                                      {item.category}
                                    </Badge>
                                    <div className="flex items-center text-muted-on-black text-sm">
                                      <Calendar className="w-4 h-4 mr-2" />
                                       {new Date(item.date).toLocaleDateString('en-US', {
                                         year: 'numeric',
                                         month: 'long'
                                       })}
                                    </div>
                                  </div>
                                  <DialogTitle className="text-3xl font-bold text-on-black leading-tight mb-4">
                                    {item.title}
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="prose prose-lg max-w-none">
                                  <div className="text-muted-on-black leading-relaxed whitespace-pre-line">
                                    {item.fullContent}
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </CardHeader>
                      </div>
                    ) : (
                      // Regular article without image
                      <CardHeader className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="outline" className={`${getCategoryColor(item.category)} text-xs font-medium tracking-wider`}>
                            {item.category}
                          </Badge>
                          <div className="flex items-center text-muted-on-black text-sm font-light">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(item.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long'
                            })}
                          </div>
                        </div>
                        
                        <CardTitle className="text-2xl font-bold text-on-black mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                          {item.title}
                        </CardTitle>
                        
                        <CardDescription className="text-muted-on-black text-base leading-relaxed mb-6">
                          {item.description}
                        </CardDescription>
                        
                        <div className="flex gap-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="premium-outline" size="sm" className="group/btn">
                                Read More
                                <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-premium-black border-gold/20">
                              <DialogHeader>
                                <div className="flex items-center justify-between mb-4">
                                  <Badge variant="outline" className={`${getCategoryColor(item.category)} text-xs font-medium tracking-wider`}>
                                    {item.category}
                                  </Badge>
                                  <div className="flex items-center text-muted-on-black text-sm">
                                    <Calendar className="w-4 h-4 mr-2" />
                                     {new Date(item.date).toLocaleDateString('en-US', {
                                       year: 'numeric',
                                       month: 'long'
                                     })}
                                  </div>
                                </div>
                                <DialogTitle className="text-2xl font-bold text-on-black leading-tight mb-4">
                                  {item.title}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="prose prose-lg max-w-none">
                                <div className="text-muted-on-black leading-relaxed whitespace-pre-line">
                                  {item.fullContent || item.description}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardHeader>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

      </main>
    </>
  );
};

export default Newsroom;