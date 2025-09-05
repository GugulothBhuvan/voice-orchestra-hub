import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Voice Technology" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight">
            <span className="gradient-text">Your One-Stop Platform</span>
            <br />
            <span className="text-foreground">for Voice AI Orchestration</span>
          </h1>
          
          {/* Sub-headline */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium max-w-4xl mx-auto leading-relaxed">
            from Customer Service to Recruitment, and Everything in Between
          </h2>
          
          {/* Supporting description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Voice Agents built on Audira handle <span className="text-primary font-semibold">1000s of inbound and outbound calls</span> every minute.
          </p>
          
          {/* Primary CTA */}
          <div className="pt-6">
            <Button variant="hero" size="xl" className="font-poppins">
              Try Audira Labs
            </Button>
          </div>
          
          {/* Additional supporting text */}
          <div className="pt-8 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Introducing Audira — Build, Test, Deploy, and Scale conversational voice AI agents. 
              Go from outdated IVR systems to live AI-powered calls, <span className="text-primary font-medium">in minutes</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;