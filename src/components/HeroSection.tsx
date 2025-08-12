import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/20 to-accent/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-ai rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-secondary rounded-full opacity-10 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Heart className="w-5 h-5" />
                <span>AI-Powered Healthcare Platform</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Reinventing
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Healthcare </span>
                with AI Intelligence
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Secure, intelligent, and HIPAA-compliant platform connecting patients and providers 
                through cutting-edge AI technology and modern telemedicine solutions.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Brain className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Assisted Diagnostics</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">HIPAA Compliant</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500K+</div>
                <div className="text-sm text-muted-foreground">Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-hero p-2 rounded-2xl shadow-ai">
              <img 
                src={heroImage} 
                alt="AI-powered healthcare platform dashboard"
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-ai p-4 rounded-xl shadow-ai animate-float">
              <Brain className="w-8 h-8 text-accent-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-secondary p-4 rounded-xl shadow-secondary animate-pulse-slow">
              <Heart className="w-8 h-8 text-secondary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;