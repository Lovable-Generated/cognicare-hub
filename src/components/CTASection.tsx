import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of healthcare providers and patients already using our AI-powered platform 
              to deliver better outcomes and improved efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 bg-white/10 rounded-full mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Schedule a Demo</h3>
                <p className="text-sm opacity-90 mb-4">
                  See our platform in action with a personalized demonstration
                </p>
                <Button variant="ghost" className="text-primary-foreground hover:bg-white/10">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 bg-white/10 rounded-full mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Chat with Sales</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get answers to your questions from our healthcare experts
                </p>
                <Button variant="ghost" className="text-primary-foreground hover:bg-white/10">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 bg-white/10 rounded-full mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-sm opacity-90 mb-4">
                  Speak directly with our team about your healthcare needs
                </p>
                <Button variant="ghost" className="text-primary-foreground hover:bg-white/10">
                  (555) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-sm opacity-75 mb-4">Trusted by healthcare organizations worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-60">
              <span>500K+ Patients</span>
              <span>1,000+ Providers</span>
              <span>99.9% Uptime</span>
              <span>HIPAA Compliant</span>
              <span>SOC 2 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;