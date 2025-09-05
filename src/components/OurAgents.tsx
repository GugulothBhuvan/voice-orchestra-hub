import { ShoppingCart, GraduationCap, Heart, Building, Hotel, Bot } from "lucide-react";

const agents = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Order confirmations, returns, escalations."
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Lead qualification, student engagement."
  },
  {
    icon: Heart,
    title: "Health Tech",
    description: "Patient follow-ups, reminders."
  },
  {
    icon: Building,
    title: "BFSI",
    description: "Loan verification, fraud alerts."
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Reservations, concierge support."
  },
  {
    icon: Bot,
    title: "Audira Agents",
    description: "General-purpose voice agents library."
  }
];

const OurAgents = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Agents That <span className="gradient-text">Do More Than Talk</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Build agents that sound natural, understand context, and scale with your business needs.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <div key={index} className="card-hover bg-card rounded-2xl p-6 shadow-md border group">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-3">{agent.title}</h3>
                <p className="text-muted-foreground">{agent.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurAgents;