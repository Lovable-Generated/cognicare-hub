import { Calendar, Users, MessageSquare, Shield, Clock, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import dentalTeam from "@/assets/dental-team.jpg";
import dentalLabTechnology from "@/assets/dental-lab-technology.jpg";
import digitalBooking from "@/assets/digital-booking.jpg";

const FeaturesGrid = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Book appointments with your preferred dentists in just a few clicks. Real-time availability and instant confirmation.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Verified Doctors",
      description: "All dentists on our platform are licensed and verified. View profiles, specializations, and patient reviews.",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Lab Communication",
      description: "Direct messaging between doctors and prosthetists for seamless lab work coordination and updates.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your medical data is protected with end-to-end encryption and HIPAA-compliant security measures.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with appointments, questions, or technical issues.",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Quality Care",
      description: "Premium dental treatments with transparent pricing and satisfaction guarantee from trusted professionals.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">DentalQuick</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the future of dental care with our comprehensive platform designed for patients, 
            doctors, and laboratory professionals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/40 backdrop-blur-md border-primary/10 hover:shadow-primary transition-all duration-300 group hover:border-primary/30 hover:bg-card/60"
              >
                <CardHeader className="pb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-primary/10 backdrop-blur-sm w-fit mb-4 group-hover:shadow-primary transition-all duration-300`}>
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Image Showcase Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-card hover:shadow-primary transition-all duration-300 backdrop-blur-sm border border-primary/10">
              <img 
                src={dentalTeam} 
                alt="Professional dental team"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">Expert Team</h3>
                <p className="text-muted-foreground text-sm">Licensed dental professionals</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-card hover:shadow-primary transition-all duration-300 backdrop-blur-sm border border-primary/10">
              <img 
                src={dentalLabTechnology} 
                alt="Advanced dental laboratory technology"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">Advanced Technology</h3>
                <p className="text-muted-foreground text-sm">State-of-the-art dental equipment</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-card hover:shadow-primary transition-all duration-300 backdrop-blur-sm border border-primary/10">
              <img 
                src={digitalBooking} 
                alt="Digital appointment booking system"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">Digital Platform</h3>
                <p className="text-muted-foreground text-sm">Easy online booking system</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Verified Dentists" },
            { number: "10K+", label: "Appointments Booked" },
            { number: "50+", label: "Lab Partners" },
            { number: "4.9/5", label: "Patient Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;