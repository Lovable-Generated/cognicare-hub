import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Calendar, 
  FileText, 
  Heart, 
  MessageSquare, 
  Shield, 
  Stethoscope, 
  Users,
  Zap,
  ChartBar
} from "lucide-react";
import patientPortalImage from "@/assets/patient-portal.jpg";
import providerDashboardImage from "@/assets/provider-dashboard.jpg";
import aiMedicalIcon from "@/assets/ai-medical-icon.jpg";

const FeaturesSection = () => {
  const patientFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Symptom Checker",
      description: "Get preliminary insights with our advanced AI diagnostic assistant"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "Book appointments with intelligent provider matching"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Digital Prescriptions",
      description: "Manage medications and receive automated refill reminders"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Secure Messaging",
      description: "HIPAA-compliant communication with your healthcare team"
    }
  ];

  const providerFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Patient Management",
      description: "Comprehensive patient profiles with AI-powered insights"
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Clinical Decision Support",
      description: "AI-assisted diagnostics and treatment recommendations"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Automated Documentation",
      description: "Voice-to-text transcription with medical coding assistance"
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Population health insights and outcome tracking"
    }
  ];

  const aiFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Risk scoring and early intervention recommendations"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "OCR Processing",
      description: "Automated extraction from medical documents and images"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Automated Triage",
      description: "Intelligent patient prioritization and care pathways"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud Detection",
      description: "AI-powered security monitoring and threat detection"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Complete Healthcare Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering patients, providers, and healthcare organizations with AI-driven solutions
            for better outcomes and improved efficiency.
          </p>
        </div>

        {/* Patient Portal */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Heart className="w-5 h-5" />
                  <span>Patient Portal</span>
                </div>
                <h3 className="text-3xl font-bold">
                  Personalized Healthcare at Your Fingertips
                </h3>
                <p className="text-lg text-muted-foreground">
                  Empower patients with intelligent health management tools, from AI-assisted symptom checking
                  to seamless appointment scheduling and secure communication.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {patientFeatures.map((feature, index) => (
                  <Card key={index} className="border-0 shadow-none bg-primary/5">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button variant="default" size="lg">
                Explore Patient Portal
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-primary p-1 rounded-2xl shadow-primary">
                <img 
                  src={patientPortalImage} 
                  alt="Patient portal interface"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Provider Dashboard */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-secondary font-semibold">
                  <Stethoscope className="w-5 h-5" />
                  <span>Provider Dashboard</span>
                </div>
                <h3 className="text-3xl font-bold">
                  Advanced Clinical Workflows
                </h3>
                <p className="text-lg text-muted-foreground">
                  Streamline clinical operations with AI-powered patient management, automated documentation,
                  and intelligent decision support tools designed for modern healthcare providers.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {providerFeatures.map((feature, index) => (
                  <Card key={index} className="border-0 shadow-none bg-secondary/5">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-secondary mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button variant="secondary" size="lg">
                View Provider Tools
              </Button>
            </div>
            
            <div className="lg:order-1 relative">
              <div className="bg-gradient-secondary p-1 rounded-2xl shadow-secondary">
                <img 
                  src={providerDashboardImage} 
                  alt="Provider dashboard interface"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI Intelligence */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Brain className="w-5 h-5" />
                  <span>AI Intelligence</span>
                </div>
                <h3 className="text-3xl font-bold">
                  Cutting-Edge Medical AI
                </h3>
                <p className="text-lg text-muted-foreground">
                  Harness the power of artificial intelligence for enhanced diagnostics, predictive analytics,
                  and automated workflows that improve patient outcomes and operational efficiency.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {aiFeatures.map((feature, index) => (
                  <Card key={index} className="border-0 shadow-none bg-accent/5">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-accent mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button variant="ai" size="lg">
                Discover AI Features
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-ai p-1 rounded-2xl shadow-ai">
                <img 
                  src={aiMedicalIcon} 
                  alt="AI medical intelligence visualization"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              
              {/* Floating AI Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-ai p-3 rounded-lg shadow-ai animate-pulse-slow">
                <Brain className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;