import DentalHeader from "@/components/dental/DentalHeader";
import DentalHero from "@/components/dental/DentalHero";
import FeaturesGrid from "@/components/dental/FeaturesGrid";
import ImageGallery from "@/components/dental/ImageGallery";
import CTASection from "@/components/dental/CTASection";
import DentalFooter from "@/components/dental/DentalFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DentalHeader />
      <main>
        <DentalHero />
        <FeaturesGrid />
        <ImageGallery />
        <CTASection />
      </main>
      <DentalFooter />
    </div>
  );
};

export default Index;
