import { createContext } from 'react';

export const ThemeContext = createContext({
  message: {},
  setMessage: () => {},
  newMessage: () => {},
});
