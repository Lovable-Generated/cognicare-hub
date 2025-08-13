import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import DentalHeader from "@/components/dental/DentalHeader";
import DentalFooter from "@/components/dental/DentalFooter";
import { 
  MessageSquare, Clock, CheckCircle, AlertCircle, Package, 
  Truck, FileText, Users, Star, TrendingUp, Send, Upload,
  Calendar, Phone, Mail, MapPin, Award, Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockLabs = [
  {
    id: 1,
    name: "Premium Dental Lab NYC",
    specialty: "Crown & Bridge",
    rating: 4.9,
    turnaround: "3-5 days",
    location: "Manhattan, NY",
    certifications: ["FDA Approved", "ISO 9001", "NADL Member"],
    services: ["Crowns", "Bridges", "Veneers", "Inlays/Onlays"],
    completedOrders: 15420,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400"
  },
  {
    id: 2,
    name: "Digital Smile Solutions",
    specialty: "Digital Dentistry",
    rating: 4.8,
    turnaround: "2-4 days",
    location: "Brooklyn, NY",
    certifications: ["CAD/CAM Certified", "3D Printing Expert", "FDA Approved"],
    services: ["Digital Impressions", "3D Printed Models", "Surgical Guides", "Clear Aligners"],
    completedOrders: 8932,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400"
  },
  {
    id: 3,
    name: "Aesthetic Dental Arts",
    specialty: "Cosmetic Restorations",
    rating: 5.0,
    turnaround: "5-7 days",
    location: "Queens, NY",
    certifications: ["Master Ceramist", "AACD Member", "ISO 13485"],
    services: ["Porcelain Veneers", "Zirconia Crowns", "Smile Design", "Color Matching"],
    completedOrders: 11234,
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400"
  }
];

const mockOrders = [
  {
    id: "ORD-2024-001",
    patient: "John Smith",
    type: "Zirconia Crown",
    status: "in_progress",
    lab: "Premium Dental Lab NYC",
    dateSubmitted: "2024-01-15",
    expectedDelivery: "2024-01-20",
    progress: 65
  },
  {
    id: "ORD-2024-002",
    patient: "Sarah Johnson",
    type: "Porcelain Veneers (6 units)",
    status: "completed",
    lab: "Aesthetic Dental Arts",
    dateSubmitted: "2024-01-10",
    expectedDelivery: "2024-01-17",
    progress: 100
  },
  {
    id: "ORD-2024-003",
    patient: "Mike Davis",
    type: "Surgical Guide",
    status: "pending",
    lab: "Digital Smile Solutions",
    dateSubmitted: "2024-01-16",
    expectedDelivery: "2024-01-19",
    progress: 25
  },
  {
    id: "ORD-2024-004",
    patient: "Emma Wilson",
    type: "Full Arch Bridge",
    status: "shipped",
    lab: "Premium Dental Lab NYC",
    dateSubmitted: "2024-01-12",
    expectedDelivery: "2024-01-18",
    progress: 90
  }
];

const mockMessages = [
  {
    id: 1,
    from: "Lab Technician - Premium Dental",
    message: "The shade B2 has been confirmed for patient John Smith's crown. Proceeding with fabrication.",
    time: "2 hours ago",
    unread: true
  },
  {
    id: 2,
    from: "Dr. Michael Chen",
    message: "Please prioritize the surgical guide for tomorrow's implant case.",
    time: "5 hours ago",
    unread: false
  },
  {
    id: 3,
    from: "Lab Technician - Digital Smile",
    message: "Digital impressions received. Starting the design process now.",
    time: "1 day ago",
    unread: false
  }
];

const LabConnect = () => {
  const [activeTab, setActiveTab] = useState("labs");
  const [messageText, setMessageText] = useState("");
  const { toast } = useToast();

  const handleConnectLab = (labName: string) => {
    toast({
      title: "Connection Request Sent!",
      description: `Your connection request to ${labName} has been sent. They'll respond within 24 hours.`,
    });
  };

  const handleSendMessage = () => {
    if (messageText.trim()) {
      toast({
        title: "Message Sent!",
        description: "Your message has been sent to the lab.",
      });
      setMessageText("");
    }
  };

  const handleUploadFile = () => {
    toast({
      title: "File Upload",
      description: "File upload dialog would open here for STL files, images, etc.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-500 border-green-500/30';
      case 'in_progress': return 'bg-blue-500/20 text-blue-500 border-blue-500/30';
      case 'shipped': return 'bg-purple-500/20 text-purple-500 border-purple-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <DentalHeader />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Lab <span className="text-primary">Connect</span> Portal
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Seamless communication and collaboration between dental professionals and laboratory technicians
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/40 backdrop-blur-md border-primary/10">
            <CardContent className="p-4 flex items-center gap-3">
              <Package className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">247</p>
                <p className="text-xs text-muted-foreground">Active Orders</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/40 backdrop-blur-md border-primary/10">
            <CardContent className="p-4 flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">52</p>
                <p className="text-xs text-muted-foreground">Partner Labs</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/40 backdrop-blur-md border-primary/10">
            <CardContent className="p-4 flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">3.2</p>
                <p className="text-xs text-muted-foreground">Avg Days Delivery</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/40 backdrop-blur-md border-primary/10">
            <CardContent className="p-4 flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">98%</p>
                <p className="text-xs text-muted-foreground">Success Rate</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="labs">Partner Labs</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="new-order">New Order</TabsTrigger>
          </TabsList>

          {/* Partner Labs Tab */}
          <TabsContent value="labs" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockLabs.map((lab) => (
                <Card key={lab.id} className="bg-card/40 backdrop-blur-md border-primary/10 hover:shadow-primary transition-all hover:border-primary/30">
                  <CardHeader>
                    <img 
                      src={lab.image} 
                      alt={lab.name}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-lg">{lab.name}</CardTitle>
                    <CardDescription>{lab.specialty}</CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{lab.rating}</span>
                      <Badge variant="secondary" className="ml-auto">
                        {lab.turnaround}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {lab.location}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Package className="h-4 w-4" />
                      {lab.completedOrders.toLocaleString()} orders completed
                    </div>

                    <div>
                      <p className="text-xs font-medium mb-2">Services:</p>
                      <div className="flex flex-wrap gap-1">
                        {lab.services.slice(0, 3).map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {lab.services.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{lab.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-medium mb-2">Certifications:</p>
                      <div className="flex flex-wrap gap-1">
                        {lab.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <Shield className="h-3 w-3 text-primary" />
                            <span className="text-xs text-muted-foreground">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button 
                      className="w-full" 
                      variant="premium"
                      onClick={() => handleConnectLab(lab.name)}
                    >
                      Connect with Lab
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-4">
            {mockOrders.map((order) => (
              <Card key={order.id} className="bg-card/40 backdrop-blur-md border-primary/10">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-lg">{order.id}</h3>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status.replace('_', ' ').toUpperCase()}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Patient:</span>
                          <span className="ml-2 font-medium">{order.patient}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Type:</span>
                          <span className="ml-2 font-medium">{order.type}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Lab:</span>
                          <span className="ml-2 font-medium">{order.lab}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Delivery:</span>
                          <span className="ml-2 font-medium">{order.expectedDelivery}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="w-48">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{order.progress}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${order.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-4">
            <Card className="bg-card/40 backdrop-blur-md border-primary/10">
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>Communication with labs and team members</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockMessages.map((msg) => (
                  <div key={msg.id} className="flex gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-colors">
                    <div className="flex-shrink-0">
                      <div className={`w-2 h-2 rounded-full ${msg.unread ? 'bg-primary' : 'bg-transparent'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-sm">{msg.from}</p>
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{msg.message}</p>
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4">
                  <div className="flex gap-2">
                    <Textarea 
                      placeholder="Type your message..." 
                      className="bg-background/50 backdrop-blur-sm"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                    />
                    <div className="flex flex-col gap-2">
                      <Button onClick={handleSendMessage} variant="premium">
                        <Send className="h-4 w-4" />
                      </Button>
                      <Button onClick={handleUploadFile} variant="outline">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* New Order Tab */}
          <TabsContent value="new-order">
            <Card className="bg-card/40 backdrop-blur-md border-primary/10">
              <CardHeader>
                <CardTitle>Create New Lab Order</CardTitle>
                <CardDescription>Submit a new order to your preferred dental laboratory</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient-name">Patient Name</Label>
                    <Input 
                      id="patient-name" 
                      placeholder="Enter patient name"
                      className="bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="case-type">Case Type</Label>
                    <Input 
                      id="case-type" 
                      placeholder="e.g., Crown, Bridge, Veneer"
                      className="bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tooth-number">Tooth Number(s)</Label>
                    <Input 
                      id="tooth-number" 
                      placeholder="e.g., 14, 15"
                      className="bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shade">Shade</Label>
                    <Input 
                      id="shade" 
                      placeholder="e.g., A2, B1"
                      className="bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instructions">Special Instructions</Label>
                  <Textarea 
                    id="instructions" 
                    placeholder="Any special requirements or notes for the lab..."
                    className="bg-background/50 backdrop-blur-sm"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Attachments</Label>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                       onClick={handleUploadFile}>
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload STL files, X-rays, or photos
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Supported formats: STL, JPG, PNG, PDF (Max 50MB)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => toast({
                      title: "Draft Saved",
                      description: "Your order has been saved as draft.",
                    })}
                  >
                    Save as Draft
                  </Button>
                  <Button 
                    variant="premium" 
                    className="flex-1"
                    onClick={() => toast({
                      title: "Order Submitted!",
                      description: "Your lab order has been submitted successfully.",
                    })}
                  >
                    Submit Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <DentalFooter />
    </div>
  );
};

export default LabConnect;