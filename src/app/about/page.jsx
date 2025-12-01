"use client";
import { motion } from "framer-motion";
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

// Reusable smooth animation variants (premium feel)
const sectionVariants = {
  hidden: { opacity: 0, y: 90 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // silky smooth
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

export default function Page() {
  return (
    <SectionObserverProvider>
      {/* Hero – elegant entrance (only once feels right) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.div>

      {/* All sections below animate EVERY time on scroll */}
      <ObservedSection id="difference">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "-100px" }}
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

      {/* Partners Section (fixed empty id) */}
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

      {/* Optional: Add Careers section if you want it back */}
      {/* <ObservedSection id="careers">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "-100px" }}
        >
          <CareersSection />
        </motion.div>
      </ObservedSection> */}

      {/* Contact Card & Footer – also animate on every scroll */}
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