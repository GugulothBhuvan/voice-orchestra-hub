import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    "Home", "Contact Us", "Schedule a Call", "Pricing", "Blog", "LLMs.txt", "Full LLMs.txt"
  ];
  
  const productLinks = [
    "Dashboard", "Function Calling", "PDFs, RAGs, and Knowledge Bases", 
    "Using Twilio for Calls", "Using Plivo for Calls", "Multilingual Support",
    "Making Bulk Calls", "Agent Library"
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Logo & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-poppins gradient-text">Audira Labs</h3>
              <p className="text-slate-400 mt-2">Voice AI Orchestration Platform</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Middle Column - Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Column - Product */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Audira Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;