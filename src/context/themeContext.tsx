import {createContext, useState} from 'react'

import { DefaultTheme, ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

export type ThemeContextData = {
  switchTheme: () => void;
  theme: DefaultTheme
}

type ContextProp = {
  children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ContextThemeProvider = ({children}: ContextProp) => {

  const [theme, setTheme] = useState(light);

  const handleSwitchTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }


  return (
    <ThemeContext.Provider value={{switchTheme: handleSwitchTheme, theme}}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ContextThemeProvider}
