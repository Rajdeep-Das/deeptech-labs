import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // IBM Carbon Design System official colors
        gray: {
          10: '#f4f4f4',
          20: '#e0e0e0',
          30: '#c6c6c6',
          40: '#a8a8a8',
          50: '#8d8d8d',
          60: '#6f6f6f',
          70: '#525252',
          80: '#393939',
          90: '#262626',
          100: '#161616',
        },
        blue: {
          10: '#edf5ff',
          20: '#d0e2ff',
          30: '#a6c8ff',
          40: '#78a9ff',
          50: '#4589ff',
          60: '#0f62fe',
          70: '#0043ce',
          80: '#002d9c',
          90: '#001d6c',
          100: '#001141',
        },
        red: {
          10: '#fff1f1',
          60: '#da1e28',
        },
        green: {
          10: '#defbe6',
          60: '#24a148',
        },
      },
      fontFamily: {
        'sans': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      // Carbon Design System spacing scale
      spacing: {
        '01': '0.125rem',    // 2px
        '02': '0.25rem',     // 4px
        '03': '0.5rem',      // 8px
        '04': '0.75rem',     // 12px
        '05': '1rem',        // 16px
        '06': '1.5rem',      // 24px
        '07': '2rem',        // 32px
        '08': '2.5rem',      // 40px
        '09': '3rem',        // 48px
        '10': '4rem',        // 64px
        '11': '5rem',        // 80px
        '12': '6rem',        // 96px
        '13': '10rem',       // 160px
      },
      // Carbon typography scale
      fontSize: {
        'caption-01': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.32px' }],
        'caption-02': ['0.875rem', { lineHeight: '1.125rem', letterSpacing: '0.32px' }],
        'label-01': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.32px' }],
        'label-02': ['0.875rem', { lineHeight: '1.125rem', letterSpacing: '0.16px' }],
        'helper-text-01': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.32px' }],
        'helper-text-02': ['0.875rem', { lineHeight: '1.125rem', letterSpacing: '0.16px' }],
        'body-compact-01': ['0.875rem', { lineHeight: '1.125rem', letterSpacing: '0.16px' }],
        'body-compact-02': ['1rem', { lineHeight: '1.375rem', letterSpacing: '0px' }],
        'body-01': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.16px' }],
        'body-02': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0px' }],
        'heading-compact-01': ['0.875rem', { lineHeight: '1.125rem', letterSpacing: '0.16px' }],
        'heading-compact-02': ['1rem', { lineHeight: '1.375rem', letterSpacing: '0px' }],
        'heading-01': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.16px' }],
        'heading-02': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0px' }],
        'heading-03': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0px' }],
        'heading-04': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '0px' }],
        'heading-05': ['2rem', { lineHeight: '2.5rem', letterSpacing: '0px' }],
        'heading-06': ['2.625rem', { lineHeight: '3.125rem', letterSpacing: '0px' }],
        'heading-07': ['3.375rem', { lineHeight: '4rem', letterSpacing: '0px' }],
        'fluid-heading-03': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0px' }],
        'fluid-heading-04': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '0px' }],
        'fluid-heading-05': ['2rem', { lineHeight: '2.5rem', letterSpacing: '0px' }],
        'fluid-heading-06': ['2.625rem', { lineHeight: '3.125rem', letterSpacing: '0px' }],
      },
      maxWidth: {
        '8xl': '88rem',
        'screen-sm': '42rem',    // Carbon Design System breakpoints
        'screen-md': '66rem',
        'screen-lg': '82rem',
        'screen-xl': '99rem',
        'screen-max': '99rem',
      },
      // Carbon Design System grid system
      gridTemplateColumns: {
        'carbon-sm': 'repeat(4, 1fr)',
        'carbon-md': 'repeat(8, 1fr)',
        'carbon-lg': 'repeat(16, 1fr)',
      },
      // Professional shadows following Carbon elevation
      boxShadow: {
        'carbon-01': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'carbon-02': '0 1px 6px rgba(0, 0, 0, 0.1)',
        'carbon-03': '0 2px 6px rgba(0, 0, 0, 0.2)',
        'carbon-04': '0 3px 14px rgba(0, 0, 0, 0.15)',
        'carbon-05': '0 3px 14px rgba(0, 0, 0, 0.25)',
      },
      // Professional border radius
      borderRadius: {
        'none': '0',
        'carbon': '0px',     // Carbon uses sharp corners by default
        'carbon-sm': '4px',  // Subtle rounding when needed
      }
    },
  },
  plugins: [],
} satisfies Config;
