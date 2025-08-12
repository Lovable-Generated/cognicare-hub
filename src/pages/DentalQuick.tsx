import DentalHeader from "@/components/dental/DentalHeader";
import DentalHero from "@/components/dental/DentalHero";
import FeaturesGrid from "@/components/dental/FeaturesGrid";
import CTASection from "@/components/dental/CTASection";
import DentalFooter from "@/components/dental/DentalFooter";

const DentalQuick = () => {
  return (
    <div className="min-h-screen bg-background">
      <DentalHeader />
      <main>
        <DentalHero />
        <FeaturesGrid />
        <CTASection />
      </main>
      <DentalFooter />
    </div>
  );
};

export default DentalQuick;