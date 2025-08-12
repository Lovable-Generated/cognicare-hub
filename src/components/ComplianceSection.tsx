import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  Globe, 
  UserCheck,
  CheckCircle
} from "lucide-react";

const ComplianceSection = () => {
  const complianceFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "HIPAA Compliant",
      description: "Full compliance with healthcare privacy regulations",
      color: "primary"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "GDPR Ready",
      description: "European data protection standards implemented",
      color: "secondary"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "End-to-End Encryption",
      description: "Military-grade encryption for all data transmission",
      color: "accent"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Multi-Factor Authentication",
      description: "Advanced identity verification and access controls",
      color: "primary"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Audit Logging",
      description: "Complete activity tracking and compliance reporting",
      color: "secondary"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "SOC 2 Certified",
      description: "Independently verified security and availability",
      color: "accent"
    }
  ];

  const certifications = [
    "HIPAA",
    "GDPR",
    "SOC 2 Type II",
    "ISO 27001",
    "HL7 FHIR",
    "DICOM",
    "IEC 62304",
    "FDA 21 CFR Part 11"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-4">
            <Shield className="w-5 h-5" />
            <span>Security & Compliance</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Built for Healthcare Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade security and compliance features designed specifically for healthcare 
            organizations, ensuring patient data protection and regulatory adherence.
          </p>
        </div>

        {/* Compliance Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {complianceFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full mb-4 ${
                  feature.color === 'primary' ? 'bg-primary/10 text-primary' :
                  feature.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                  'bg-accent/10 text-accent'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Healthcare Standards & Certifications</h3>
            <p className="text-muted-foreground">
              Our platform meets the highest industry standards for healthcare technology
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm border-primary/20 hover:bg-primary/10 transition-colors"
              >
                <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Security Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">256-bit</div>
            <div className="text-sm text-muted-foreground">AES Encryption</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary mb-2">99.99%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Security Monitoring</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">Zero</div>
            <div className="text-sm text-muted-foreground">Data Breaches</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;