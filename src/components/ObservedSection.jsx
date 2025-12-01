"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useSectionObserver } from "@/contexts/SectionObserverContext";

export default function ObservedSection({ id, children }) {
  const { ref, inView } = useInView({
    threshold: 0.6, // adjust: triggers when ~60% of section visible
  });

  const { registerSection } = useSectionObserver();

  useEffect(() => {
    registerSection(id, inView);
  }, [id, inView, registerSection]);

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
}
