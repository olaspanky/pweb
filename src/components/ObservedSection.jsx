"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useSectionObserver } from "@/contexts/SectionObserverContext";

export default function ObservedSection({ id, children }) {
  

  return (
    <section id={id} >
      {children}
    </section>
  );
}
