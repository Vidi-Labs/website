import { useState, useEffect, useCallback } from 'react';

export function useAutoTab(tabCount, interval = 2000) {
  const [activeTab, setActiveTab] = useState(0);

  const nextTab = useCallback(() => {
    setActiveTab((current) => (current + 1) % tabCount);
  }, [tabCount]);

  useEffect(() => {
    const timer = setInterval(nextTab, interval);
    return () => clearInterval(timer);
  }, [nextTab, interval]);

  const setTab = useCallback((index) => {
    setActiveTab(index);
  }, []);

  return { activeTab, setTab };
}
