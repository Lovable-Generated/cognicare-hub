import { Brain, Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Platform": [
      "Patient Portal",
      "Provider Dashboard", 
      "AI Features",
      "Telemedicine",
      "API Documentation"
    ],
    "Solutions": [
      "Hospitals",
      "Clinics", 
      "Telehealth",
      "Mental Health",
      "Chronic Care"
    ],
    "Resources": [
      "Documentation",
      "Support Center",
      "Case Studies",
      "Blog",
      "Webinars"
    ],
    "Company": [
      "About Us",
      "Careers",
      "Privacy Policy",
      "Terms of Service",
      "Contact"
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">CogniCare Hub</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Reinventing healthcare through AI-powered solutions that connect patients and providers 
              with secure, intelligent, and HIPAA-compliant technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-foreground/60" />
                <span>123 Healthcare Ave, San Francisco, CA 94102</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span>contact@cognicarehub.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/70">
              <span>© 2025 CogniCare Hub. All rights reserved.</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Compliance</a>
            </div>
            
            {/* Compliance Badges */}
            <div className="flex items-center gap-4 text-xs text-primary-foreground/60">
              <div className="flex items-center gap-1">
                <Brain className="w-3 h-3" />
                <span>HIPAA</span>
              </div>
              <div className="flex items-center gap-1">
                <Brain className="w-3 h-3" />
                <span>SOC 2</span>
              </div>
              <div className="flex items-center gap-1">
                <Brain className="w-3 h-3" />
                <span>GDPR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;