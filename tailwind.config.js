/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          600: '#2563EB',
          700: '#1D4ED8',
        },
        fg: {
          base: '#111827',
          muted: '#4B5563',
        },
        bg: {
          page: '#F9FAFB',
          card: '#F3F4F6',
        },
        action: {
          fg: '#FFFFFF',
          bg: '#2563EB',
          'bg-hover': '#1D4ED8',
        },
        success: {
          600: '#16A34A',
        },
        error: {
          600: '#DC2626',
        },
        accent: {
          500: '#F59E0B',
        },
        neutral: {
          900: '#111827',
          600: '#4B5563',
          500: '#6B7280',
          100: '#F3F4F6',
          50: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Use your assignment font
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // 36px
        h2: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }], // 30px
        h3: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // 24px
        body: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16px
        small: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14px
      },
      borderRadius: {
        card: '1rem', // 16px rounded for cards
      },
    },
  },
  plugins: [],
};
