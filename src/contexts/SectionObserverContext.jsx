"use client";

import { createContext, useContext, useState, useCallback } from "react";

const SectionContext = createContext();

export function SectionObserverProvider({ children }) {
  const [activeSection, setActiveSection] = useState(null);

  const registerSection = useCallback((id, inView) => {
    if (inView) setActiveSection(id);
  }, []);

  return (
    <SectionContext.Provider value={{ activeSection, registerSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionObserver() {
  return useContext(SectionContext);
}
