import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import OurAgents from "@/components/OurAgents";
import Features from "@/components/Features";
import CaseStudies from "@/components/CaseStudies";
import Integrations from "@/components/Integrations";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <OurAgents />
      <Features />
      <CaseStudies />
      <Integrations />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
