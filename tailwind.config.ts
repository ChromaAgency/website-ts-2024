import colors from 'tailwindcss/colors'
export default {
  content: [
    "./src/**/*.{scss,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
  ],
  darkMode: ['class'],
  theme: {

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '3rem',
        '2xl': '14rem',
      },
    },

    fontFamily: {
      'body': ['Poppins', 'sans-serif'],
    },

    extend: {
      colors: {
        'primary': '#8a50bc',
        'brand': {
          DEFAULT: '#310860',
          50: '#f5f0fa',
          100: '#ebe1f7',
          200: '#d7c1ef',
          300: '#c2a1e8',
          400: '#ae81e0',
          500: '#9961d8',
          600: '#8a50bc',
          700: '#6f3e96',
          800: '#542f70',
          900: '#392049',
        },
        'accent': {
          DEFAULT: '#2ee0ca',
          600: '#1fb8a6',
          700: '#178e80',
        },
        'surface': '#f7f8fc',
      },
      boxShadow: {
        panel: '0 10px 30px -14px rgba(20, 16, 40, 0.28)',
      },
    },
  },

  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
