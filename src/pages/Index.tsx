import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TranslationDemo from "@/components/TranslationDemo";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <TranslationDemo />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
