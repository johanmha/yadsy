export const colors = {
  primary: {
    50: '#e6f0ff',
    100: '#cce0ff',
    200: '#99c2ff',
    300: '#66a3ff',
    400: '#3385ff',
    500: '#0066ff',
    600: '#0052cc',
    700: '#003d99',
    800: '#002966',
    900: '#001433',
  },

  secondary: {
    50: '#f2f2f2',
    100: '#e6e6e6',
    200: '#cccccc',
    300: '#b3b3b3',
    400: '#999999',
    500: '#808080',
    600: '#666666',
    700: '#4d4d4d',
    800: '#333333',
    900: '#1a1a1a',
  },

  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',

  white: '#ffffff',
  black: '#000000',
};

export type ColorToken = keyof typeof colors;
