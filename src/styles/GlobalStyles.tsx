import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    input { 
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      &:focus, &:active {
        outline: none;
      } 
      border: none;
    }
    
    /**
      SpoqaHanSans
     */
    @font-face {
      font-family: "SpoqaHanSans";
      src: url("/fonts/SpoqaHanSans/SpoqaHanSansRegular.woff") format('woff'), 
      url("/fonts/SpoqaHanSans/SpoqaHanSansRegular.woff2") format('woff'),
      url("/fonts/SpoqaHanSans/SpoqaHanSansRegular.ttf") format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: "SpoqaHanSans";
      src: url("/fonts/SpoqaHanSans/SpoqaHanSansBold.woff") format('woff'), 
      url("/fonts/SpoqaHanSans/SpoqaHanSansBold.woff2") format('woff'),
      url("/fonts/SpoqaHanSans/SpoqaHanSansBold.ttf") format('truetype');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: "SpoqaHanSans";
      src: url("/fonts/SpoqaHanSans/SpoqaHanSansLight.woff") format('woff'), 
      url("/fonts/SpoqaHanSans/SpoqaHanSansLight.woff2") format('woff'),
      url("/fonts/SpoqaHanSans/SpoqaHanSansLight.ttf") format('truetype');
      font-weight: 300;
      font-style: normal;
    }
`;

export default GlobalStyles;
