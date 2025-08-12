import { Button } from "@/components/ui/button";
import { Calendar, Users, MessageSquare, Star } from "lucide-react";
import { Link } from "react-router-dom";

const DentalHero = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[600px] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-primary rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Connect with
              <span className="block text-primary">Dental Experts</span>
              <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">Instantly</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Book appointments with qualified dentists, access lab services, and manage your dental care 
              through our comprehensive digital platform. Premium dental care made simple.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/doctors">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-gold shadow-gold hover:shadow-primary text-lg px-8"
                >
                  Find a Doctor
                </Button>
              </Link>
              <Link to="/treatments">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
                >
                  View Treatments
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-primary fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-primary" />
                <span>500+ Dentists</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4 text-primary" />
                <span>10K+ Appointments</span>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-6">
            {/* Patient Portal Card */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-gold transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Patient Portal</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Book appointments, manage prescriptions, and access your dental records securely.
                  </p>
                  <Link to="/doctors">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Doctor Network Card */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-gold transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Verified Doctors</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Choose from our network of licensed dentists and specialists in your area.
                  </p>
                  <Link to="/doctors">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Find Doctors
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Lab Connect Card */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-gold transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Lab Connect</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Seamless communication between doctors and prosthetists for lab work.
                  </p>
                  <Link to="/lab-connect">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalHero;