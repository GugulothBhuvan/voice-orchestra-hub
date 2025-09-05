import { 
  Users, Zap, UserCheck, Workflow, Globe, MessageCircle, 
  Cpu, Building2, Shield, RotateCcw 
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Bulk Calling at Scale",
    description: "Launch campaigns instantly."
  },
  {
    icon: Zap,
    title: "Custom API Triggers",
    description: "Integrate with your workflows."
  },
  {
    icon: UserCheck,
    title: "Human-in-the-Loop",
    description: "Seamless escalation when needed."
  },
  {
    icon: Workflow,
    title: "Workflow Integrations",
    description: "CRM, ERP, and beyond."
  },
  {
    icon: Globe,
    title: "Multilingual",
    description: "Support for Indian & global languages."
  },
  {
    icon: MessageCircle,
    title: "Natural Conversations",
    description: "Context-aware, human-like AI."
  },
  {
    icon: Cpu,
    title: "Connect Any Model",
    description: "Bring your own LLM or API."
  },
  {
    icon: Building2,
    title: "Enterprise Plans",
    description: "Tailored for large organizations."
  },
  {
    icon: Shield,
    title: "100% Data Privacy",
    description: "Secure by design."
  },
  {
    icon: RotateCcw,
    title: "Model Switching",
    description: "Choose the right AI for the job."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Features That <span className="gradient-text">Power Real Voice Agents</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            With integrated speech, telephony, and APIs, Audira equips you to move from idea to 
            live deployment quickly and securely.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card-hover bg-card rounded-2xl p-6 shadow-md border group">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold font-poppins mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;