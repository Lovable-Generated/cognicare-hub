import { Button } from "@/components/ui/button";
import { Calendar, Users, MessageSquare, Star } from "lucide-react";
import { Link } from "react-router-dom";
import dentalClinicInterior from "@/assets/dental-clinic-interior.jpg";
import patientConsultation from "@/assets/patient-consultation.jpg";

const DentalHero = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={dentalClinicInterior} 
          alt="Modern dental clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
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

          {/* Right Content - Hero Image & Feature Cards */}
          <div className="relative">
            {/* Main Hero Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-gold">
              <img 
                src={patientConsultation} 
                alt="Patient receiving dental consultation"
                className="w-full h-80 object-cover"
              />
            </div>
            
            {/* Feature Cards Grid */}
            <div className="grid gap-4">
              {/* Patient Portal Card */}
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-card border border-border hover:shadow-gold transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Easy Booking</h3>
                    <p className="text-muted-foreground text-sm">Schedule appointments instantly</p>
                  </div>
                  <Link to="/doctors">
                    <Button variant="outline" size="sm" className="ml-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Book
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Doctor Network Card */}
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-card border border-border hover:shadow-gold transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Verified Doctors</h3>
                    <p className="text-muted-foreground text-sm">Licensed dental professionals</p>
                  </div>
                  <Link to="/doctors">
                    <Button variant="outline" size="sm" className="ml-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Find
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Lab Connect Card */}
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-card border border-border hover:shadow-gold transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Lab Connect</h3>
                    <p className="text-muted-foreground text-sm">Seamless lab communication</p>
                  </div>
                  <Link to="/lab-connect">
                    <Button variant="outline" size="sm" className="ml-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Connect
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