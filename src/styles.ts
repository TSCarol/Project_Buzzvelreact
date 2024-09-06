import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  desktop: 'min-width: 992px',
  tablet: '(min-width: 768px) and (max-width: 991px)',
  celular: 'max-width: 767px',
};

export const colors = {
  dark: '#000001',
  white: '#eee',
  blue: '#1D2B53',
  blueOpacity: 'rgba(29, 43, 83, 0.2);',
  purple: '#7E2553',
  purpleOpacity: 'rgba(126, 37, 83, 0.3);',
  pink: '#FF004D',
  yellow: '#FFF024',
};

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif
    }


    html {
      scroll-behavior: smooth;
  }
`;
