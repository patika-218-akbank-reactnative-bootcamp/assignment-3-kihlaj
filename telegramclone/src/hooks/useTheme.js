import { useContext } from 'react';
import { ThemeContext } from '../context/theme';

const useTheme = () => {
  // object or array destruction
  const themeContext = useContext(ThemeContext);

  return themeContext;
};

export default useTheme;
