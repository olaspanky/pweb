"use client";
import { motion, useScroll, useTransform } from "framer-motion";
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
// Premium animation variants (re-usable)
const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // buttery smooth (like Vercel/Linear)
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  exit: { opacity: 0, y: 50 }, // optional smooth exit
};

export default function Page() {
  return (
    <SectionObserverProvider>
      {/* Hero - big entrance, only once (feels natural) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.div>

      <SectionNavigation />
      <BackedBy />

      {/* All sections below animate EVERY time they enter the viewport */}
      <ObservedSection id="difference">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ 
            once: false,      // This is the key: re-trigger every time!
            amount: 0.3,      // trigger when 30% of section is visible
            margin: "-100px" 
          }}
        >
          <OurDifferenceSection />
        </motion.div>
      </ObservedSection>

      <ObservedSection id="solutions">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "-100px" }}
        >
          <OurSolutions />
        </motion.div>
      </ObservedSection>

      <ObservedSection id="products">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "-100px" }}
        >
          <ProductsSection />
        </motion.div>
      </ObservedSection>

      <ObservedSection id="insights">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "-100px" }}
        >
          <InsightsSection />
        </motion.div>
      </ObservedSection>

      <ObservedSection id="partners">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "-100px" }}
        >
          <PartnersSection />
        </motion.div>
      </ObservedSection>

      <ObservedSection id="careers">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "-100px" }}
        >
          <CareersSection />
        </motion.div>
      </ObservedSection>

      {/* Contact Card & Footer - also re-animate on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <ContactCard />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <Footer />
      </motion.div>
    </SectionObserverProvider>
  );
}