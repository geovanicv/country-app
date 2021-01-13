import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input,
  button {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.4rem;
  }

  body {
    background-color: ${props => props.theme.colors.background};
  }

  html {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
  }
`;