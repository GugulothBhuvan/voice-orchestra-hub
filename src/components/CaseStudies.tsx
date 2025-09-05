const CaseStudies = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            <span className="gradient-text">Case Studies</span> — Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how leading companies are transforming their communication workflows with Audira's voice AI platform.
          </p>
          
          {/* Placeholder cards for future case studies */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-muted/50 rounded-2xl p-8 border-2 border-dashed border-muted-foreground/20">
                <div className="w-16 h-16 bg-muted rounded-xl mx-auto mb-4"></div>
                <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;