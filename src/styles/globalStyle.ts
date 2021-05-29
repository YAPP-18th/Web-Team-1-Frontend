import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    width: fit-content;
    text-decoration: none;
    color: black;
  }

  body{
    position: relative;
  }
`;

export default GlobalStyle;
