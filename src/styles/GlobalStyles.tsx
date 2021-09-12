import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
      box-sizing: border-box;
    }
    input { 
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      &:focus, &:active {
        outline: none;
      } 
      border: none;
    }
    
    body {
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }
`;

export default GlobalStyles;
