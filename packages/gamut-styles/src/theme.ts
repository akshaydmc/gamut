import { createTheme } from '@codecademy/variance';

import {
  boxShadows,
  colors,
  elements,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  mediaQueries,
  spacing,
} from './variables';

export const theme = createTheme({
  boxShadows,
  breakpoints: mediaQueries,
  fontSize,
  fontFamily,
  lineHeight,
  fontWeight,
  spacing,
  elements,
})
  .addColors(colors)
  .addColorModes('light', {
    light: {
      primary: 'hyper',
      secondary: 'navy',
      text: 'navy',
      background: 'white',
      shadow: 'lightShadow',
    },
    dark: {
      primary: 'yellow',
      secondary: 'white',
      text: 'white',
      background: 'navy',
      shadow: 'darkShadow',
    },
  })
  .addScale('borders', ({ colors }) => ({
    1: `1px solid ${colors.secondary}`,
    2: `2px solid ${colors.secondary}`,
  }))
  .createScaleVariables('elements')
  .build();

export const platformTheme = createTheme(theme)
  .addColors({
    navy: {
      300: '#585C6D',
      600: '#232940',
      800: '#10162F',
      900: '#0B0F21',
    },
    lightBeige: '#FFFBF8',
    gold: '#8A7300',
    orange: {
      800: '#D14900',
    },
    pink: {
      800: '#CA00D1',
    },
    teal: '#027E97',
    paleRed: '#E85D7F',
    purple: '#AEE938',
  })
  .build();
