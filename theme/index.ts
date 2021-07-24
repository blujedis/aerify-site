import { initTheme, THEMES, css } from '@aerify/react';
// import styles from '@aerify/styles';

const {
  Context,
  Consumer,
  Provider,
  createStyle,
  useTheme,
  useThemeContext,
  useThemeSwitcher,
  ThemeGlobals,
  ThemeSelector,
  ThemeToggle,
  ThemeStyles
} = initTheme(THEMES);

export * from './css';

export {
  css,
  Context,
  Consumer,
  Provider,
  createStyle,
  useTheme,
  useThemeContext,
  useThemeSwitcher,
  ThemeGlobals,
  ThemeStyles,
  ThemeSelector,
  ThemeToggle
};

