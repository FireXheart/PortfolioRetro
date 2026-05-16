import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['"Press Start 2P"', 'system-ui'],
        body: ['"Courier Prime"', 'monospace'],
        code: ['"Courier Prime"', 'monospace'],
      },
      colors: {
        background: '#0a0a0a',
        foreground: '#f0f0f0',
        card: {
          DEFAULT: '#1a1a1a',
          foreground: '#f0f0f0',
        },
        popover: {
          DEFAULT: '#1a1a1a',
          foreground: '#f0f0f0',
        },
        primary: {
          DEFAULT: '#B6F500',
          foreground: '#0a0a0a',
        },
        secondary: {
          DEFAULT: '#111111',
          foreground: '#B6F500',
        },
        muted: {
          DEFAULT: '#1a1a1a',
          foreground: '#888888',
        },
        accent: {
          DEFAULT: '#B6F500',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: '#B6F500',
        input: '#1a1a1a',
        ring: '#B6F500',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: '0px',
        md: '0px',
        sm: '0px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'glitch': {
          '0%, 100%': { textShadow: 'none', transform: 'none' },
          '20%': { textShadow: '-2px 0 #ff0000, 2px 0 #0000ff', transform: 'translateX(2px)' },
          '40%': { textShadow: '2px 0 #ff0000, -2px 0 #0000ff', transform: 'translateX(-2px)' },
          '60%': { textShadow: 'none', transform: 'translateX(0)' },
          '80%': { textShadow: '-1px 0 #B6F500', transform: 'skewX(2deg)' },
        },
        'pulse-orange': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glitch': 'glitch 0.2s infinite',
        'pulse-orange': 'pulse-orange 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
