import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/auth" className="inline-flex items-center text-primary hover:text-primary-hover mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Sign In
        </Link>

        <Card className="backdrop-blur-xl bg-card/80 border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Terms of Service
            </CardTitle>
            <p className="text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          
          <CardContent className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using QuickDental services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Use of Service</h2>
              <p className="text-muted-foreground">
                QuickDental provides a platform to connect patients with dental professionals. Our services include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Online appointment booking</li>
                <li>Access to verified dental professionals</li>
                <li>Communication between doctors and laboratories</li>
                <li>Secure storage of dental records</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. User Responsibilities</h2>
              <p className="text-muted-foreground">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of account credentials</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Respecting the rights and privacy of other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Medical Disclaimer</h2>
              <p className="text-muted-foreground">
                QuickDental is a platform that facilitates connections between patients and healthcare providers. 
                We do not provide medical advice, diagnosis, or treatment. Always consult with qualified healthcare 
                professionals for medical concerns.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Privacy and Data Protection</h2>
              <p className="text-muted-foreground">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
                use, and protect your information. We comply with HIPAA regulations and implement industry-standard 
                security measures.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Appointment Policies</h2>
              <p className="text-muted-foreground">
                Appointments booked through our platform are subject to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Confirmation by the healthcare provider</li>
                <li>Cancellation policies set by individual providers</li>
                <li>Potential rescheduling due to emergencies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Payment Terms</h2>
              <p className="text-muted-foreground">
                Payment for services is processed securely through our platform. Users agree to pay all fees 
                associated with services booked through QuickDental. Refund policies vary by provider.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                QuickDental shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Modifications to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes via email or through the platform. Continued use of the service after modifications 
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="text-muted-foreground ml-4 mt-2">
                <p>Email: legal@quickdental.com</p>
                <p>Phone: 1-800-DENTAL-1</p>
                <p>Address: 123 Healthcare Blvd, Medical City, MC 12345</p>
              </div>
            </section>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                © {new Date().getFullYear()} QuickDental. All rights reserved.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;