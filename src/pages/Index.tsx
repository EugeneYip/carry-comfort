import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProofBar } from "@/components/landing/ProofBar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Modes } from "@/components/landing/Modes";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { FeatureSplit } from "@/components/landing/FeatureSplit";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { Reviews } from "@/components/landing/Reviews";
import { FAQ } from "@/components/landing/FAQ";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProofBar />
      <HowItWorks />
      <Modes />
      <ProductShowcase />
      <FeatureSplit />
      <ComparisonTable />
      <Reviews />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
