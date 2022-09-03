import React, { useState } from 'react';
import { ThemeContext } from '../context/theme';

import lightTheme from '../constants/theme/light';
import darkTheme from '../constants/theme/dark';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  const handleToggleTheme = theme => {
    if (theme.type === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme: handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
