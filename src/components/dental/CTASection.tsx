import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex p-4 rounded-2xl bg-gradient-gold shadow-gold mb-8">
            <svg className="h-12 w-12 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your
            <span className="block text-primary">Dental Experience?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of patients and hundreds of dental professionals who trust RapidSmiles 
            for premium dental care and seamless lab communication.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/auth">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-gold shadow-gold hover:shadow-primary text-lg px-8 py-3"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/doctors">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3"
              >
                Browse Doctors
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center opacity-70">
            <div className="text-center">
              <div className="text-sm text-muted-foreground font-medium">HIPAA Compliant</div>
              <div className="mt-1 h-8 flex items-center justify-center">
                <div className="px-3 py-1 border border-primary/30 rounded text-xs text-primary">
                  SECURE
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground font-medium">Licensed Professionals</div>
              <div className="mt-1 h-8 flex items-center justify-center">
                <div className="px-3 py-1 border border-primary/30 rounded text-xs text-primary">
                  VERIFIED
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground font-medium">24/7 Support</div>
              <div className="mt-1 h-8 flex items-center justify-center">
                <div className="px-3 py-1 border border-primary/30 rounded text-xs text-primary">
                  AVAILABLE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;