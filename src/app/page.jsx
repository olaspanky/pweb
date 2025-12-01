import BackedBy from "@/components/BackedBy";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import ObservedSection from "@/components/ObservedSection";
import SectionNavigation from "@/components/SectionNavigation";
import { SectionObserverProvider } from "@/contexts/SectionObserverContext";
import CareersSection from "@/ui/homepage/CareersSection";
import HeroSection from "@/ui/homepage/HeroSection";
import InsightsSection from "@/ui/homepage/InsightsSection";
import OurDifferenceSection from "@/ui/homepage/OurDifferenceSection";
import OurSolutions from "@/ui/homepage/OurSolutionsSection";
import PartnersSection from "@/ui/homepage/PartnersSection";
import ProductsSection from "@/ui/homepage/ProductsSection";

export default function Page() {
  return (
    <div className="w-[100vw]">
      <SectionObserverProvider>
        {/* Hero Section - no animation */}
        <HeroSection />

        {/* Fixed navigation that highlights current section */}
        <SectionNavigation />

        {/* Simple static section (still gets observed for navigation) */}
        <BackedBy />

        {/* All other sections - plain, fast, no fade/slide effects */}
          <OurDifferenceSection />

          <OurSolutions />

          <ProductsSection />

          <InsightsSection />

          <PartnersSection />

          <CareersSection />

        {/* Contact Card & Footer - also static */}
        <ContactCard />
        <Footer />
      </SectionObserverProvider>
    </div>
  );
}