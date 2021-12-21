import { createGlobalStyle } from "styled-components";
import Puppins from "./Puppins-Regular.woff";

export default createGlobalStyle`
  @font-face {
    font-family: 'Puppins-Regular';
    src: local('Puppins'),
    url(${Puppins}) format('woff');
    font-style: normal;
    font-weight: normal;
  }
`;
