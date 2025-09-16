
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#d63031',
          600: '#b71c1c',
          700: '#9f1311',
          800: '#7f1d1d',
          900: '#5f1515'
        },
        accent: {
          50: '#f7f3f0',
          100: '#e8ddd4',
          200: '#d4c3b0',
          300: '#c0a98c',
          400: '#a68b5b',
          500: '#8b6914',
          600: '#6d5018',
          700: '#4f3a0e',
          800: '#332509',
          900: '#1a1304'
        },
        neutral: {
          25: '#fefefe',
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#9aa0a6',
          500: '#5f6368',
          600: '#3c4043',
          700: '#2c2b29',
          800: '#202124',
          900: '#171717'
        },
        success: {
          500: '#16a085',
          600: '#138d75'
        },
        amber: '#FFBF00',
        meat: '#9b5f44'
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'premium': '0 32px 64px -12px rgba(214, 48, 49, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'glow': '0 0 20px rgba(214, 48, 49, 0.3)',
        'soft': '0 4px 12px rgba(0,0,0,0.1)',
        'medium': '0 8px 24px rgba(0,0,0,0.15)'
      },
      borderRadius: { xl2: '1.25rem' },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'fade-up-delay': 'fadeUp 0.8s ease-out 0.2s both',
        'fade-up-delay-2': 'fadeUp 0.8s ease-out 0.4s both',
        'fade-up-delay-3': 'fadeUp 0.8s ease-out 0.6s both',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
