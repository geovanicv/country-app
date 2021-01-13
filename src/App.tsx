import React from 'react';

import {ContextThemeProvider} from './context/themeContext';

import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';

import GlobalStyle from './styles/global';

function App() {
  return (
    <ContextThemeProvider>
      <CountryDetails />
      <GlobalStyle />
    </ContextThemeProvider>
  )
}

export default App;
