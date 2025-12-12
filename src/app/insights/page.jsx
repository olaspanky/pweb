import BackedBy from "@/components/BackedBy";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import ObservedSection from "@/components/ObservedSection";
import SectionNavigation from "@/components/ReportSearchBar";
import { SectionObserverProvider } from "@/contexts/SectionObserverContext";
import CareersSection from "@/ui/insight/CareersSection";
import HeroSection from "@/ui/insight/HeroSection";
import OurDifferenceSection from "@/ui/insight/OurDifferenceSection";


export default function Page() {
  return (
    <div className="w-[100vw] ">
      
      <SectionObserverProvider>
        <HeroSection />

<div className="mt-[-96]">
        <SectionNavigation  />

</div>

        {/* Correctly observed sections */}
        <ObservedSection id="difference">
          <OurDifferenceSection />
        </ObservedSection>

     

       

    

        <ContactCard />
        <Footer />
      </SectionObserverProvider>
    </div>
  );
}
