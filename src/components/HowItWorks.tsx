import { LogIn, Settings, Phone } from "lucide-react";

const steps = [
  {
    icon: LogIn,
    title: "Connect Account",
    description: "Sign in to the dashboard and link your preferred provider."
  },
  {
    icon: Settings,
    title: "Configure Agent",
    description: "Choose a pre-built template or build from scratch with clicks or code."
  },
  {
    icon: Phone,
    title: "Click to Call",
    description: "Trigger live calls, campaigns, or connect the agent to your phone number instantly."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Simplicity for All — <span className="gradient-text">Build With Clicks or Code</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a builder, solopreneur, or developer who loves no-code simplicity with full control, 
            Audira meets you where you are.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 text-center card-hover bg-card rounded-2xl p-8 shadow-md border">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 ai-pulse">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;