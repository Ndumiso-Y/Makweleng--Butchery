
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: '#FFBF00',
        black: '#000000',
        grey: {
          light: '#F5F5F5',
          medium: '#888888', 
          dark: '#333333'
        }
      },
      boxShadow: { 
        soft: '0 4px 12px rgba(0,0,0,0.1)',
        medium: '0 8px 24px rgba(0,0,0,0.15)'
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
