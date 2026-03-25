import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface SiteConfig {
  email: string;
  phone: string;
}

const defaultConfig: SiteConfig = {
  email: "support@mvizindia.com",
  phone: "+91 065422201234"
};

const SiteContext = createContext<SiteConfig>(defaultConfig);

export const SiteProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);

  useEffect(() => {
    // Try to load from API first, then fallback to localStorage, then default
    fetch('/api/config')
      .then(res => res.json())
      .then(data => setConfig({ ...defaultConfig, ...data }))
      .catch(() => {
        const saved = localStorage.getItem('mviz_config');
        if (saved) {
          setConfig({ ...defaultConfig, ...JSON.parse(saved) });
        }
      });
  }, []);

  return (
    <SiteContext.Provider value={config}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteConfig = () => useContext(SiteContext);
