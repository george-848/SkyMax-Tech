export type ThemeId = 'cobalt-slate' | 'nordic-daylight' | 'graphite-amber' | 'alabaster-teal';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  mode: 'Dark' | 'Light';
  description: string;
  swatches: [string, string, string];
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'cobalt-slate',
    name: 'Cobalt Slate',
    mode: 'Dark',
    description: 'Deep midnight slate with crisp sky-cobalt accents',
    swatches: ['#070B14', '#111A2E', '#38BDF8'],
  },
  {
    id: 'nordic-daylight',
    name: 'Nordic Daylight',
    mode: 'Light',
    description: 'Crisp architectural white with royal cobalt highlights',
    swatches: ['#FFFFFF', '#F4F7FB', '#1D4ED8'],
  },
  {
    id: 'graphite-amber',
    name: 'Graphite Amber',
    mode: 'Dark',
    description: 'Carbon charcoal paired with precision amber gold',
    swatches: ['#09090B', '#18181B', '#F59E0B'],
  },
  {
    id: 'alabaster-teal',
    name: 'Alabaster Teal',
    mode: 'Light',
    description: 'Clean mineral off-white with deep ocean teal',
    swatches: ['#F8FAFC', '#EFF4F6', '#0F766E'],
  },
];

export const DEFAULT_THEME: ThemeId = 'cobalt-slate';
