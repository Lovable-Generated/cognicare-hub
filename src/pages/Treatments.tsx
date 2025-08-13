import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DentalHeader from "@/components/dental/DentalHeader";
import DentalFooter from "@/components/dental/DentalFooter";
import { Clock, DollarSign, Shield, Star, TrendingUp, Activity, CheckCircle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockTreatments = {
  general: [
    {
      id: 1,
      name: "Teeth Cleaning",
      description: "Professional dental cleaning to remove plaque and tartar buildup",
      duration: "45 mins",
      price: "$120-150",
      popularity: 98,
      benefits: ["Prevents cavities", "Freshens breath", "Removes stains", "Early problem detection"],
      recommended: "Every 6 months",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400"
    },
    {
      id: 2,
      name: "Dental Filling",
      description: "Restore teeth damaged by decay back to their normal function",
      duration: "30-60 mins",
      price: "$150-300",
      popularity: 85,
      benefits: ["Stops cavity growth", "Restores tooth function", "Prevents infection", "Long-lasting"],
      recommended: "As needed",
      image: "https://images.unsplash.com/photo-1609207825181-52d3214556dd?w=400"
    },
    {
      id: 3,
      name: "Root Canal",
      description: "Save infected teeth by removing damaged pulp and nerves",
      duration: "90-120 mins",
      price: "$800-1500",
      popularity: 60,
      benefits: ["Saves natural tooth", "Eliminates pain", "Prevents spread of infection", "Restores chewing"],
      recommended: "When necessary",
      image: "https://images.unsplash.com/photo-1626265774643-f451baaa0238?w=400"
    },
    {
      id: 4,
      name: "Tooth Extraction",
      description: "Safe removal of damaged or problematic teeth",
      duration: "30-45 mins",
      price: "$150-400",
      popularity: 70,
      benefits: ["Relieves pain", "Prevents infection", "Makes room for orthodontics", "Quick recovery"],
      recommended: "When necessary",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400"
    }
  ],
  cosmetic: [
    {
      id: 5,
      name: "Teeth Whitening",
      description: "Professional whitening for a brighter, more confident smile",
      duration: "60-90 mins",
      price: "$300-600",
      popularity: 95,
      benefits: ["Brightens smile", "Boosts confidence", "Long-lasting results", "Safe procedure"],
      recommended: "Every 1-2 years",
      image: "https://images.unsplash.com/photo-1606811971618-b3e5f5d3a1f1?w=400"
    },
    {
      id: 6,
      name: "Dental Veneers",
      description: "Thin shells placed over teeth to improve appearance",
      duration: "2-3 visits",
      price: "$800-2000/tooth",
      popularity: 88,
      benefits: ["Natural appearance", "Stain resistant", "Minimal prep", "Long-lasting"],
      recommended: "10-15 year lifespan",
      image: "https://images.unsplash.com/photo-1560424284-f3811c95f7b2?w=400"
    },
    {
      id: 7,
      name: "Dental Bonding",
      description: "Repair chips, cracks, and gaps with tooth-colored resin",
      duration: "30-60 mins",
      price: "$150-400/tooth",
      popularity: 82,
      benefits: ["Quick procedure", "Affordable", "Natural look", "Minimal tooth removal"],
      recommended: "5-10 year lifespan",
      image: "https://images.unsplash.com/photo-1609207825181-52d3214556dd?w=400"
    },
    {
      id: 8,
      name: "Smile Makeover",
      description: "Complete smile transformation with multiple procedures",
      duration: "Multiple visits",
      price: "$5000-15000",
      popularity: 75,
      benefits: ["Complete transformation", "Customized plan", "Dramatic results", "Improved function"],
      recommended: "Consultation required",
      image: "https://images.unsplash.com/photo-1606811841115-0bbd3d3a1f11?w=400"
    }
  ],
  orthodontic: [
    {
      id: 9,
      name: "Traditional Braces",
      description: "Metal brackets and wires to straighten teeth",
      duration: "18-24 months",
      price: "$3000-6000",
      popularity: 80,
      benefits: ["Effective for complex cases", "Precise control", "No compliance issues", "Covered by insurance"],
      recommended: "Age 10-14 ideal",
      image: "https://images.unsplash.com/photo-1606811971618-b3e5f5d3a1f1?w=400"
    },
    {
      id: 10,
      name: "Invisalign",
      description: "Clear, removable aligners for discreet teeth straightening",
      duration: "12-18 months",
      price: "$3500-8000",
      popularity: 92,
      benefits: ["Nearly invisible", "Removable", "Comfortable", "No food restrictions"],
      recommended: "Teens and adults",
      image: "https://images.unsplash.com/photo-1609207825181-52d3214556dd?w=400"
    },
    {
      id: 11,
      name: "Ceramic Braces",
      description: "Tooth-colored brackets for less noticeable treatment",
      duration: "18-24 months",
      price: "$4000-7000",
      popularity: 78,
      benefits: ["Less visible", "Effective treatment", "Strong and durable", "Good for complex cases"],
      recommended: "Teens and adults",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400"
    },
    {
      id: 12,
      name: "Retainers",
      description: "Maintain teeth position after orthodontic treatment",
      duration: "Ongoing",
      price: "$200-600",
      popularity: 85,
      benefits: ["Maintains results", "Prevents shifting", "Custom fit", "Long-lasting"],
      recommended: "Post-treatment essential",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400"
    }
  ],
  surgical: [
    {
      id: 13,
      name: "Dental Implants",
      description: "Permanent replacement for missing teeth",
      duration: "3-6 months total",
      price: "$3000-5000/tooth",
      popularity: 90,
      benefits: ["Permanent solution", "Natural look & feel", "Preserves bone", "No impact on adjacent teeth"],
      recommended: "Missing teeth",
      image: "https://images.unsplash.com/photo-1629909613654-28b9f9001394?w=400"
    },
    {
      id: 14,
      name: "Wisdom Teeth Removal",
      description: "Surgical extraction of third molars",
      duration: "45-60 mins",
      price: "$300-600/tooth",
      popularity: 88,
      benefits: ["Prevents crowding", "Reduces infection risk", "Eliminates pain", "Prevents cysts"],
      recommended: "Age 17-25",
      image: "https://images.unsplash.com/photo-1626265774643-f451baaa0238?w=400"
    },
    {
      id: 15,
      name: "Bone Grafting",
      description: "Rebuild jaw bone for implant support",
      duration: "60-90 mins",
      price: "$500-3000",
      popularity: 65,
      benefits: ["Enables implants", "Restores facial structure", "Prevents bone loss", "Improves stability"],
      recommended: "Before implants",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400"
    },
    {
      id: 16,
      name: "Gum Surgery",
      description: "Treat advanced gum disease and recession",
      duration: "60-120 mins",
      price: "$600-1500",
      popularity: 70,
      benefits: ["Stops disease progression", "Reduces pockets", "Improves appearance", "Saves teeth"],
      recommended: "Advanced gum disease",
      image: "https://images.unsplash.com/photo-1609207825181-52d3214556dd?w=400"
    }
  ]
};

const Treatments = () => {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const { toast } = useToast();

  const handleLearnMore = (treatmentName: string) => {
    toast({
      title: "Treatment Information",
      description: `Detailed information about ${treatmentName} will be displayed here.`,
    });
  };

  const handleBookConsultation = (treatmentName: string) => {
    toast({
      title: "Consultation Scheduled!",
      description: `Your consultation for ${treatmentName} has been requested. We'll contact you shortly.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <DentalHeader />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Dental <span className="text-primary">Treatments</span> & Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of dental treatments. From routine care to advanced procedures, 
            we offer solutions for all your dental needs.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/40 backdrop-blur-md border-primary/10">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-xs text-muted-foreground">Treatments Available</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/40 backdrop-blur-md border-primary/10">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4.9</p>
                <p className="text-xs text-muted-foreground">Average Rating</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/40 backdrop-blur-md border-primary/10">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">Safe & Certified</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/40 backdrop-blur-md border-primary/10">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">10K+</p>
                <p className="text-xs text-muted-foreground">Happy Patients</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Treatment Categories */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-muted/40 backdrop-blur-sm">
            <TabsTrigger value="general" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              General
            </TabsTrigger>
            <TabsTrigger value="cosmetic" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Cosmetic
            </TabsTrigger>
            <TabsTrigger value="orthodontic" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Orthodontic
            </TabsTrigger>
            <TabsTrigger value="surgical" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Surgical
            </TabsTrigger>
          </TabsList>

          {Object.entries(mockTreatments).map(([category, treatments]) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {treatments.map((treatment) => (
                  <Card key={treatment.id} className="bg-card/40 backdrop-blur-md border-primary/10 hover:shadow-primary transition-all duration-300 hover:border-primary/30 overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={treatment.image} 
                        alt={treatment.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{treatment.name}</CardTitle>
                          <CardDescription className="mt-2">{treatment.description}</CardDescription>
                        </div>
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          {treatment.popularity}% Popular
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{treatment.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">{treatment.price}</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Benefits:</p>
                        <div className="flex flex-wrap gap-2">
                          {treatment.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-1">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              <span className="text-xs text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                        <Info className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Recommended: {treatment.recommended}</span>
                      </div>
                    </CardContent>

                    <CardFooter className="grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline"
                        onClick={() => handleLearnMore(treatment.name)}
                      >
                        Learn More
                      </Button>
                      <Button 
                        variant="premium"
                        onClick={() => handleBookConsultation(treatment.name)}
                      >
                        Book Consultation
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Section */}
        <Card className="bg-gradient-primary text-primary-foreground mt-12 border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Not sure which treatment you need?</h2>
            <p className="mb-6 text-primary-foreground/90">
              Book a free consultation with our dental experts to discuss your options
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => handleBookConsultation("General Consultation")}
            >
              Get Free Consultation
            </Button>
          </CardContent>
        </Card>
      </div>

      <DentalFooter />
    </div>
  );
};

export default Treatments;