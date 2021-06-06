import React, { useState, createContext } from 'react';

export const ThemeContextCSS: any = createContext('theme-amber');
// eslint-disable-next-line react/display-name
export default ({ children }: { children: any }) => {
  const [theme, setTheme] = useState<string>('theme-amber');

  const defaultContext: any = {
    theme,
    setTheme,
  };

  return (
    <ThemeContextCSS.Provider value={defaultContext}>
      {children}
    </ThemeContextCSS.Provider>
  );
};
