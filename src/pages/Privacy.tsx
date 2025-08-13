import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
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
              Privacy Policy
            </CardTitle>
            <p className="text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          
          <CardContent className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-3">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Personal information (name, email, phone number)</li>
                <li>Medical history and dental records</li>
                <li>Insurance information</li>
                <li>Payment details</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Facilitate appointment booking and management</li>
                <li>Connect you with healthcare providers</li>
                <li>Process payments and insurance claims</li>
                <li>Send appointment reminders and updates</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-3">
                We do not sell, trade, or rent your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Healthcare providers you choose to book appointments with</li>
                <li>Laboratory partners for dental work coordination</li>
                <li>Payment processors for transaction handling</li>
                <li>Service providers who assist in operating our platform</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement robust security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1 mt-3">
                <li>End-to-end encryption for sensitive data</li>
                <li>HIPAA-compliant infrastructure</li>
                <li>Regular security audits and updates</li>
                <li>Restricted access to personal information</li>
                <li>Secure data centers with 24/7 monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-1">
                <li>Access your personal information</li>
                <li>Update or correct your data</li>
                <li>Request deletion of your account</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Restrict processing of your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                and personalize content. You can manage cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not directed to children under 13. We do not knowingly collect personal 
                information from children under 13. Parents or guardians may create accounts on behalf of minors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your information for as long as necessary to provide services and comply with legal 
                obligations. Medical records are retained according to healthcare regulations. You may request 
                deletion of your account at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. International Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information in accordance 
                with this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will notify you of any material 
                changes by email or through our platform. Your continued use of our services after changes 
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions or concerns about this privacy policy, please contact us:
              </p>
              <div className="text-muted-foreground ml-4 mt-2">
                <p>Email: privacy@rapidsmiles.com</p>
                <p>Phone: 1-800-DENTAL-1</p>
                <p>Address: 123 Healthcare Blvd, Medical City, MC 12345</p>
                <p>Data Protection Officer: dpo@rapidsmiles.com</p>
              </div>
            </section>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                © {new Date().getFullYear()} RapidSmiles. All rights reserved. Your privacy is our priority.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;