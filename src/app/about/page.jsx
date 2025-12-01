"use client";

import BackedBy from "@/components/BackedBy";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import ObservedSection from "@/components/ObservedSection";
import SectionNavigation from "@/components/SectionNavigation";
import { SectionObserverProvider } from "@/contexts/SectionObserverContext";
import CareersSection from "@/ui/about/CareersSection";
import HeroSection from "@/ui/about/HeroSection";
import InsightsSection from "@/ui/about/InsightsSection";
import OurDifferenceSection from "@/ui/about/OurDifferenceSection";
import OurSolutions from "@/ui/about/OurSolutionsSection";
import PartnersSection from "@/ui/about/PartnersSection";
import ProductsSection from "@/ui/about/ProductsSection";

export default function Page() {
  return (
    <SectionObserverProvider>
      {/* Hero – no animation */}
      <HeroSection />

      {/* All other sections – no animation */}
      <ObservedSection id="difference">
        <OurDifferenceSection />
      </ObservedSection>

      <ObservedSection id="solutions">
        <OurSolutions />
      </ObservedSection>

      <ObservedSection id="partners">
        <PartnersSection />
      </ObservedSection>

      <ObservedSection id="insights">
        <InsightsSection />
      </ObservedSection>

      {/* Optional Careers section (still commented out as in your original) */}
      {/* <ObservedSection id="careers">
        <CareersSection />
      </ObservedSection> */}

      {/* Contact Card & Footer – no animation */}
      <ContactCard />
      <Footer />
    </SectionObserverProvider>
  );
}