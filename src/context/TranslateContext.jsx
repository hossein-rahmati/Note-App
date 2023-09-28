import { createContext, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

const TranslateContext = createContext();

export function TranslateProvider({ children }) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  return (
    <TranslateContext.Provider value={{ t, i18n }}>
      {children}
    </TranslateContext.Provider>
  );
}

export function useTranslate() {
  return useContext(TranslateContext);
}
