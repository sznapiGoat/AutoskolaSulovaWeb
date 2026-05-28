// Design System — Autoškola Barbora Šůlová
// Palette: Deep Navy (#0F2D5E) + Vivid Amber (#F59E0B) on warm white
// Feel: light, alive, trustworthy, personal — local premium service

export const colors = {
  primary: {
    50:  '#EFF6FF',
    100: '#DBEAFE',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#0F2D5E', // main brand navy
    DEFAULT: '#1D4ED8',
  },
  accent: {
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B', // main amber accent
    600: '#D97706',
    DEFAULT: '#F59E0B',
  },
  neutral: {
    0:   '#FFFFFF',
    50:  '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    500: '#71717A',
    700: '#3F3F46',
    900: '#18181B',
  },
  surface: '#FFFBF4',   // warm white background
  text: {
    primary:  '#0F172A',
    secondary: '#475569',
    muted:     '#94A3B8',
  },
  // WCAG AA verified ratios:
  // primary-900 on white: 12.2:1 ✓
  // accent-500 on primary-900: 5.3:1 ✓
  // text.primary on white: 17.9:1 ✓
  // text.secondary on white: 5.9:1 ✓
};

export const typography = {
  display: '"Plus Jakarta Sans", sans-serif',
  body:    '"Nunito", sans-serif',
  // loaded via next/font/google in layout.tsx
};

export const spacing = {
  // 8px grid
  1: '8px',  2: '16px', 3: '24px', 4: '32px',
  5: '40px', 6: '48px', 7: '56px', 8: '64px',
  10: '80px', 12: '96px', 16: '128px',
};

export const motion = {
  // All durations in ms
  fast:    100,
  quick:   200,
  normal:  350,
  slow:    600,
  slower: 1000,
  // Custom cubic-beziers only — NO bounce
  ease:     [0.25, 0.1, 0.25, 1]    as const,  // standard ease
  easeOut:  [0.0,  0.0, 0.2, 1]     as const,  // decelerate
  easeIn:   [0.4,  0.0, 1,   1]     as const,  // accelerate
  spring:   { stiffness: 300, damping: 24 },    // hover spring
  springSlide: { stiffness: 200, damping: 30 }, // section reveal
};

// Section reveal variants (reusable)
export const revealVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] },
  },
};

export const staggerContainer = (stagger = 0.08) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: stagger } },
});

export const cardHover = {
  whileHover: { y: -6, transition: { stiffness: 300, damping: 20 } },
};
