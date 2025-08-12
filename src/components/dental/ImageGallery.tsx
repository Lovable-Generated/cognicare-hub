import { useState, useEffect } from "react";
import { Calendar, Star, Users, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dentistPortrait from "@/assets/dentist-portrait.jpg";
import patientConsultation from "@/assets/patient-consultation.jpg";
import dentalClinicInterior from "@/assets/dental-clinic-interior.jpg";

interface ImageSlide {
  src: string;
  alt: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ImageGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: ImageSlide[] = [
    {
      src: dentalClinicInterior,
      alt: "Modern dental clinic interior",
      title: "Premium Facilities",
      description: "State-of-the-art dental clinics with modern equipment and comfortable environments",
      icon: Star
    },
    {
      src: dentistPortrait,
      alt: "Professional dentist portrait",
      title: "Expert Dentists",
      description: "Qualified and experienced dental professionals ready to provide excellent care",
      icon: Users
    },
    {
      src: patientConsultation,
      alt: "Patient dental consultation",
      title: "Personalized Care",
      description: "Comprehensive consultations and personalized treatment plans for optimal results",
      icon: MessageSquare
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience <span className="text-primary">Dental Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our world-class facilities, expert team, and patient-centered approach to dental care.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Image Carousel */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-gold">
            {slides.map((slide, index) => {
              const IconComponent = slide.icon;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent">
                    <div className="absolute bottom-8 left-8 right-8">
                      <Card className="bg-card/90 backdrop-blur-sm border-border">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-xl bg-primary/10">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-foreground mb-2">
                                {slide.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {slide.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-gold shadow-gold hover:shadow-primary"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Appointment Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;