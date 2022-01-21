// import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const colors = {
  white: '#fff',
  white2: '#fff5ff',
  black: '#000',
  lightBlue: '#deeff9',
  blue: '#737bff',
  green: 'green',
  pinkBgColor: '#fa709a',
  yellowBgColor: '#fee140',
  boxShadow1: 'rgba(0, 0, 0, 0.24)',
  boxShadow2: 'rgba(100, 100, 111, 0.2)',
  alertDanger: '#ff9999',
  alertSuccess: '#b3d9b3',
  alertDangerText: '#ff1919',
  deleteBtnColor: '#ff4040',
  editBtnColor: '#73b973',
  backgroundColorGradient: 'linear-gradient(45deg, #fa709a 20%, #fee140 100%);',
};

export const fonts = {
  lato: "'Lato', sans-serif;",
  playfair: "'Playfair Display', serif;",
};

export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  mobileXL: 630,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `(max-width: ${size.mobileS}px)`,
  mobileM: `(max-width: ${size.mobileM}px)`,
  mobileL: `(max-width: ${size.mobileL}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  laptopL: `(max-width: ${size.laptopL}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
};

// export const device = {
//   mobileS: `(min-width: 320px)`,
//   mobileM: `(min-width: 375px)`,
//   mobileL: `(min-width: 425px)`,
//   tablet: `(min-width: 768px)`,
//   laptop: `(min-width: 1024px)`,
//   laptopL: `(min-width: 1440px)`,
//   desktop: `(min-width: 2560px)`,
// };

export const GlobalStyle = createGlobalStyle`
    * {
        /* margin: 0; */
        /* padding: 0; */
        /* box-sizing: border-box; */
        /* font-size: 18px; */
        font-family: ${fonts.lato};
    }
    body {
        /* margin: 0; */
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100vh;
        background-image: ${colors.backgroundColorGradient}
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;
