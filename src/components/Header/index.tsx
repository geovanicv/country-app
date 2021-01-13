import React from 'react';

import { Moon, Sun } from '../../assets';
import { ThemeContextData } from '../../context/themeContext';
import { Container, Wrapper, Title, ThemeSwitch } from './styles';

const headerModifier = {
  light: <Sun />,
  dark: <Moon/>
}

const Header = ({switchTheme, theme}: ThemeContextData) => (
  <Container>
    <Wrapper>
      <Title>Where in the world?</Title>
      <ThemeSwitch onClick={switchTheme}>
        {headerModifier[theme.title]}
      </ThemeSwitch>
    </Wrapper>
  </Container>  
)

export default Header;