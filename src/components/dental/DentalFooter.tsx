import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const DentalFooter = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-primary shadow-primary">
                <svg className="h-6 w-6 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-foreground">
                Rapid<span className="text-primary">Smiles</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Connecting patients with dental professionals and facilitating seamless communication 
              between doctors and prosthetists for optimal dental care.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <nav className="flex flex-col space-y-3">
              {[
                { name: "Find Doctors", href: "/doctors" },
                { name: "Book Appointments", href: "/doctors" },
                { name: "Treatment Plans", href: "/treatments" },
                { name: "Lab Connect", href: "/lab-connect" },
                { name: "Patient Portal", href: "/dashboard" },
                { name: "Emergency Care", href: "/emergency" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <nav className="flex flex-col space-y-3">
              {[
                { name: "Help Center", href: "/help" },
                { name: "Contact Us", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "HIPAA Compliance", href: "/hipaa" },
                { name: "Insurance Info", href: "/insurance" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Call Us</div>
                  <div className="text-muted-foreground">1-800-DENTAL-1</div>
                  <div className="text-sm text-muted-foreground">24/7 Support</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-muted-foreground">support@rapidsmiles.com</div>
                  <div className="text-sm text-muted-foreground">Response within 24h</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Address</div>
                  <div className="text-muted-foreground">
                    123 Dental Street<br />
                    Healthcare City, HC 12345
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 RapidSmiles. All rights reserved. | Connecting smiles worldwide.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">
                Accessibility
              </Link>
              <Link to="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </Link>
              <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DentalFooter;