import { useCallback } from 'react';

export function useScrollToSection() {
  return useCallback((sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
}
