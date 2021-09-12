/**
 * Color System
 */
const colors: { [key: string]: string | object } = {
  /**
   * BASIC COLOR
   */
  MAIN: '#8041ff',
  LIGHT: '#b871ff',
  DARK: '#4306cb',
  BLACK: '#222222',
  GRAY: {
    100: '#444444',
    200: '#999999',
    300: '#BBBBBB',
    400: '#DDDDDD',
    500: '#EEEEEE',
    600: '#F8F8F8',
  },
  WHITE: '#FFFFFF',
};

/**
 * Font System
 * Light 300
 * Regular 400
 * Bold 700
 */

const fonts: { [key: number]: string } = {
  48: '48px/58px Spoqa Han Sans Neo',
  36: '36px/48px Spoqa Han Sans Neo',
  32: '32px/45px Spoqa Han Sans Neo',
  28: '28px/34px Spoqa Han Sans Neo',
  24: '24px/34px Spoqa Han Sans Neo',
  20: '20px/28px Spoqa Han Sans Neo',
  18: '18px/22px Spoqa Han Sans Neo',
  16: '16px/22px Spoqa Han Sans Neo',
  14: '14px/20px Spoqa Han Sans Neo',
  13: '13px/18px Spoqa Han Sans Neo',
  12: '12px/18px Spoqa Han Sans Neo',
  10: '10px/14px Spoqa Han Sans Neo',
};

const fontWeights: { [key: string]: number } = {
  light: 300,
  regular: 400,
  bold: 700,
};

const viewSizes: { [key: string]: string } = {
  MB: '@media only screen and (max-width: 1080px)',
  PC: '@media only screen and (min-width: 1080px)',
};

const layoutSizes: { [key: string]: string } = {
  BODY_MAX_WIDTH: '440px',
  HEADER: '2.5rem',
  BOTTOM_NAVIGATION: '3rem',
};

const zIndex: { [key: string]: number } = {
  HEADER: 5,
  BOTTOM_NAVIGATION: 5,
};

const Themes = {
  colors,
  fonts,
  fontWeights,
  viewSizes,
  layoutSizes,
  zIndex,
};

export default Themes;
