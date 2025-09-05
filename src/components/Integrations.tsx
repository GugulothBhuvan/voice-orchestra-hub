const integrations = [
  { name: "Twilio", logo: "🔗" },
  { name: "Plivo", logo: "📱" },
  { name: "WhatsApp", logo: "💬" },
  { name: "Slack", logo: "💬" },
  { name: "Salesforce", logo: "☁️" },
  { name: "HubSpot", logo: "📊" },
  { name: "Zapier", logo: "⚡" },
  { name: "Microsoft", logo: "🏢" }
];

const Integrations = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            <span className="gradient-text">Seamless</span> Integrations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Effortlessly integrate Audira into your communication stack. Works hand-in-hand with 
            leading platforms to supercharge your workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <div key={index} className="card-hover bg-card rounded-2xl p-6 shadow-md border group text-center">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {integration.logo}
              </div>
              <p className="text-sm font-medium text-muted-foreground">{integration.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;