import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size:1rem;
  }
  
  a {
    width: fit-content;
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
