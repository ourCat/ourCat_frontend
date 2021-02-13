/**
 * Color System
 */
const colors: { [key: string]: string | object } = {
  /**
   * BASIC COLOR
   */
  MAIN: "#8041ff",
  LIGHT: "#b871ff",
  DARK: "#4306cb",
  BLACK: "#222222",
  GRAY: {
    100: "#444444",
    200: "#999999",
    300: "#BBBBBB",
    400: "#DDDDDD",
    500: "#EEEEEE",
    600: "#F8F8F8",
  },
  WHITE: "#FFFFFF",
};

/**
 * Font System
 * Light 300
 * Regular 400
 * Bold 700
 */

const fonts: { [key: number]: string } = {
  48: "48px/58px SpoqaHanSans",
  36: "36px/48px SpoqaHanSans",
  32: "32px/45px SpoqaHanSans",
  28: "28px/34px SpoqaHanSans",
  24: "24px/32px SpoqaHanSans",
  20: "20px/28px SpoqaHanSans",
  18: "18px/22px SpoqaHanSans",
  16: "16px/20px SpoqaHanSans",
  14: "14px/20px SpoqaHanSans",
  13: "13px/18px SpoqaHanSans",
  12: "12px/16px SpoqaHanSans",
  10: "10px/14px SpoqaHanSans",
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

const Themes = {
  colors,
  fonts,
  fontWeights,
  viewSizes,
};

export default Themes;
