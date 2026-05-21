export const COLORS = {
  bgDark:    '#1a0033',
  bgMid:     '#2d0052',
  bgLight:   '#3d006e',
  purple:    '#6B21A8',
  purpleLight:'#9333EA',
  gold:      '#FFD700',
  goldDark:  '#B8860B',
  red:       '#8B0000',
  fire:      '#FF4500',
  green:     '#16A34A',
  greenLight:'#4ADE80',
  text:      '#F5E6FF',
  textDim:   '#C084FC',
  white:     '#FFFFFF',
  black:     '#000000',

  worlds: {
    pirate: { bg: '#0C1A4A', accent: '#F59E0B', border: '#1E3A8A' },
    forest: { bg: '#052E16', accent: '#86EFAC', border: '#15803D' },
    cave:   { bg: '#1C1917', accent: '#F97316', border: '#78350F' },
  },
} as const;

export const FONTS = {
  regular:  'Quicksand-Regular',
  bold:     'Quicksand-Bold',
  semibold: 'Quicksand-SemiBold',
  medium:   'Quicksand-Medium',
  light:    'Quicksand-Light',
} as const;

export const SIZES = {
  xs:  10,
  sm:  12,
  md:  16,
  lg:  20,
  xl:  24,
  xxl: 32,
  xxxl:40,
} as const;
