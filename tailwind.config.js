/**
 * @imports
 */
// node_modules
import { heroui } from '@heroui/react';

/**
 * @type {import('tailwindcss').Config}
 */
export const content = [
  './node_modules/@heroui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  './app/**/*.{html,js,ts,jsx,tsx}',
  './components/**/*.{html,js,ts,jsx,tsx}',
  './widgets/**/*.{html,js,ts,jsx,tsx}',
];
export const darkMode = 'class';
export const theme = {
  extend: {},
};
export const plugins = [
  heroui({
    themes: {
      brand: {
        colors: {
          background: '#fafaff',
          danger: {
            DEFAULT: '#DC3545',
            foreground: '#ffffff',
          },
          default: {
            DEFAULT: '#F8F9FA',
            foreground: '#000000',
          },
          primary: {
            DEFAULT: '#ee422c',
            foreground: '#ffffff',
          },
          secondary: {
            DEFAULT: '#6C757D',
            foreground: '#ffffff',
          },
          success: {
            DEFAULT: '#28A745',
            foreground: '#ffffff',
          },
          warning: {
            DEFAULT: '#FFC107',
            foreground: '#ffffff',
          },
        },
        extend: 'light',
      },
    },
  }),
];
