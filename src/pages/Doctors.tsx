import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DentalHeader from "@/components/dental/DentalHeader";
import DentalFooter from "@/components/dental/DentalFooter";
import { Search, MapPin, Star, Clock, Calendar, Award, GraduationCap, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Dentistry",
    experience: "15 years",
    rating: 4.9,
    reviews: 234,
    location: "Downtown Medical Center",
    address: "123 Main St, New York, NY 10001",
    availability: "Available Today",
    education: "Harvard School of Dental Medicine",
    languages: ["English", "Spanish"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    nextAvailable: "2:00 PM Today",
    consultationFee: "$150",
    insuranceAccepted: ["Delta Dental", "Aetna", "Blue Cross"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Orthodontics",
    experience: "12 years",
    rating: 4.8,
    reviews: 189,
    location: "Smile Dental Clinic",
    address: "456 Park Ave, New York, NY 10022",
    availability: "Available Tomorrow",
    education: "Columbia University",
    languages: ["English", "Mandarin"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    nextAvailable: "10:00 AM Tomorrow",
    consultationFee: "$200",
    insuranceAccepted: ["MetLife", "Cigna", "United Healthcare"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatric Dentistry",
    experience: "8 years",
    rating: 5.0,
    reviews: 412,
    location: "Kids Dental Care",
    address: "789 Broadway, New York, NY 10003",
    availability: "Available Today",
    education: "NYU College of Dentistry",
    languages: ["English", "Spanish", "Portuguese"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    nextAvailable: "4:30 PM Today",
    consultationFee: "$125",
    insuranceAccepted: ["Aetna", "Guardian", "Delta Dental"]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Oral Surgery",
    experience: "20 years",
    rating: 4.7,
    reviews: 156,
    location: "Advanced Dental Surgery Center",
    address: "321 5th Ave, New York, NY 10016",
    availability: "Next Week",
    education: "Johns Hopkins University",
    languages: ["English"],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400",
    nextAvailable: "Monday 9:00 AM",
    consultationFee: "$250",
    insuranceAccepted: ["Blue Cross", "Aetna", "Cigna"]
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Cosmetic Dentistry",
    experience: "10 years",
    rating: 4.9,
    reviews: 298,
    location: "Perfect Smile Studio",
    address: "555 Madison Ave, New York, NY 10022",
    availability: "Available Tomorrow",
    education: "UCLA School of Dentistry",
    languages: ["English", "French"],
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400",
    nextAvailable: "11:30 AM Tomorrow",
    consultationFee: "$175",
    insuranceAccepted: ["MetLife", "Guardian", "Delta Dental"]
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Periodontics",
    experience: "18 years",
    rating: 4.8,
    reviews: 203,
    location: "Gum Health Specialists",
    address: "888 Lexington Ave, New York, NY 10065",
    availability: "Available This Week",
    education: "Boston University",
    languages: ["English", "Korean"],
    image: "https://images.unsplash.com/photo-1612349316228-5942a9b489c2?w=400",
    nextAvailable: "Thursday 3:00 PM",
    consultationFee: "$185",
    insuranceAccepted: ["United Healthcare", "Cigna", "Aetna"]
  }
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const { toast } = useToast();

  const filteredDoctors = mockDoctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty;
    const matchesLocation = selectedLocation === "all" || doctor.location.includes(selectedLocation);
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  const handleBookAppointment = (doctorName: string) => {
    toast({
      title: "Appointment Request Sent!",
      description: `Your appointment request with ${doctorName} has been sent. You'll receive a confirmation soon.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <DentalHeader />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Find Your Perfect <span className="text-primary">Dentist</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our network of verified dental professionals and book your appointment instantly
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card/60 backdrop-blur-md border border-primary/10 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search doctors or specialties..."
                className="pl-10 bg-background/50 backdrop-blur-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger className="bg-background/50 backdrop-blur-sm">
                <SelectValue placeholder="Select Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                <SelectItem value="General Dentistry">General Dentistry</SelectItem>
                <SelectItem value="Orthodontics">Orthodontics</SelectItem>
                <SelectItem value="Pediatric Dentistry">Pediatric Dentistry</SelectItem>
                <SelectItem value="Oral Surgery">Oral Surgery</SelectItem>
                <SelectItem value="Cosmetic Dentistry">Cosmetic Dentistry</SelectItem>
                <SelectItem value="Periodontics">Periodontics</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="bg-background/50 backdrop-blur-sm">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Downtown">Downtown</SelectItem>
                <SelectItem value="Medical Center">Medical Center</SelectItem>
                <SelectItem value="Clinic">Clinic</SelectItem>
                <SelectItem value="Studio">Studio</SelectItem>
                <SelectItem value="Center">Center</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found <span className="text-primary font-semibold">{filteredDoctors.length}</span> doctors
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="bg-card/40 backdrop-blur-md border-primary/10 hover:shadow-primary transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{doctor.name}</CardTitle>
                    <CardDescription className="text-primary">{doctor.specialty}</CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold ml-1">{doctor.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({doctor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{doctor.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>{doctor.experience} experience</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  <span>{doctor.education}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-primary font-medium">{doctor.nextAvailable}</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-semibold text-foreground">{doctor.consultationFee}</span>
                  <Badge variant={doctor.availability === "Available Today" ? "default" : "secondary"} 
                         className="bg-primary/20 text-primary border-primary/30">
                    {doctor.availability}
                  </Badge>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-muted-foreground mb-2">Insurance Accepted:</p>
                  <div className="flex flex-wrap gap-1">
                    {doctor.insuranceAccepted.map((insurance, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {insurance}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => toast({
                    title: "Profile Viewed",
                    description: `Opening ${doctor.name}'s full profile...`,
                  })}
                >
                  View Profile
                </Button>
                <Button 
                  variant="premium" 
                  className="w-full"
                  onClick={() => handleBookAppointment(doctor.name)}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <Card className="bg-card/40 backdrop-blur-md border-primary/10 p-12 text-center">
            <p className="text-muted-foreground text-lg">No doctors found matching your criteria.</p>
            <p className="text-muted-foreground mt-2">Try adjusting your filters or search term.</p>
          </Card>
        )}
      </div>

      <DentalFooter />
    </div>
  );
};

export default Doctors;