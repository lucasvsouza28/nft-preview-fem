import {
  createStitches,
} from '@stitches/react'

export const {
  globalCss,
  styled,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      bg_body: '#0d1a2d',
      bg_element: '#15273f',
      text_active: 'cyan',
      text_primary: '#FFF',
      text_secondary: '#687d9c',
    }
  }
});

export const lightTheme = createTheme({
  colors: {
    bg_body: '#eee',
    bg_element: '#FFF',
    text_active: 'darkcyan',
    text_primary: '#000',
    text_secondary: '#858585',
  }
});

export const global = globalCss({
  '*':{
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: 'sans-serif',
  }
});
