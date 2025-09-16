import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>Premium iGaming Marketing Agency | Strategic Growth Partners</title>
      <meta name="description" content="Exclusive B2B marketing agency for high-ticket iGaming clients. Strategic positioning, acquisition, and retention services. Premium, results-driven approach." />
      
      <Header />
      <main className="min-h-screen">
        <section id="hero">
          <Hero />
        </section>
        <section id="approach">
          <Philosophy />
        </section>
        <section id="contact">
          <CallToAction />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;