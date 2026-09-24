import {defineTheme} from '@astryxdesign/core/theme';
import {stoneTheme} from './stoneTheme';

// All visual decisions live in this owned Astryx theme, extending shipped Stone.
export const kassidyTheme = defineTheme({
  name: 'kassidy',
  extends: stoneTheme,
  typography: {
    scale: {base: 16, ratio: 1.25},
    body: {family: 'Arial', fallbacks: 'Helvetica, sans-serif'},
    heading: {family: 'Georgia', fallbacks: '"Times New Roman", serif'},
    code: {family: 'Courier New', fallbacks: 'monospace'},
  },
  tokens: {
    '--color-background-body': ['#f4f1eb', '#20201e'],
    '--color-background-surface': ['#f4f1eb', '#20201e'],
    '--color-background-muted': ['#e9e5dc', '#34332f'],
    '--color-background-inverted': ['#292b27', '#e9e5dc'],
    '--color-text-primary': ['#292b27', '#f4f1eb'],
    '--color-text-secondary': ['#62635a', '#c3c1b8'],
    '--color-border': ['#d6d2c8', '#52534b'],
    '--color-accent': ['#4e5848', '#c5cfb8'],
    '--color-text-accent': ['#4e5848', '#c5cfb8'],
    '--text-heading-1-weight': '400',
    '--text-heading-2-weight': '400',
    '--text-heading-3-weight': '400',
    '--text-body-leading': '1.7',
    '--text-supporting-size': '0.8125rem',
    '--text-display-1-size': 'clamp(3.25rem, 7.4vw, 8rem)',
    '--text-display-1-leading': '1.03',
    '--text-display-2-size': 'clamp(2.5rem, 5vw, 5rem)',
    '--text-display-2-leading': '1.12',
    '--text-heading-2-size': '2rem',
    '--text-heading-3-size': '1.625rem',
  },
  components: {
    heading: {base: {letterSpacing: '-0.025em'}},
    link: {base: {textDecorationThickness: 'var(--border-width)', textUnderlineOffset: 'var(--spacing-1)'}},
  },
});
