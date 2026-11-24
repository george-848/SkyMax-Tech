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
    name: 'Navy Prism',
    mode: 'Dark',
    description: 'Deep navy void with cyan, violet & amber blend',
    swatches: ['#0B1B33', '#8C5DF8', '#28E1F6'],
  },
  {
    id: 'nordic-daylight',
    name: 'Nordic Daylight',
    mode: 'Light',
    description: 'Crisp white & cool mist with cobalt-violet highlights',
    swatches: ['#FFFFFF', '#F7F9FC', '#1D4ED8'],
  },
  {
    id: 'graphite-amber',
    name: 'Graphite Amber',
    mode: 'Dark',
    description: 'Carbon charcoal paired with precision amber gold',
    swatches: ['#09090B', '#18181B', '#FAB338'],
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
