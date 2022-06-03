import { createContext, useEffect, useState } from 'react';
import { getTheme, switchTheme } from '../hooks/useTheme';

const Theme = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => switchTheme(theme), [theme]);

  return <Theme.Provider value={[theme, setTheme]}>{children}</Theme.Provider>;
};

export { Theme };
export default ThemeProvider;
