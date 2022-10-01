/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontSize: {
      '4xs': '.5rem',
      '3xs': '.5625rem',
      '2xs': '.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        grey: {
          light: '#f0f0f0',
          medium: '#e5e5e5',
          regular: '#555555',
          DEFAULT: '#2e2e2e',
        },
        binge: {
          DEFAULT: '#ea9814',
          medium: '#945da8',
          dark: '#813c9a',
        },
        white: {
          DEFAULT: '#fff',
          transp50 : 'rgba(255,255,255,0.5)'
        }
      },
      screens: {
        //sm : 640
        //md : 768
        //lg : 1024
        //xl : 1280
        '1440': '1440px',
        //2xl : 1536
        '3xl': '1600px',
        '4xl': '2000px'
      },
      zIndex: {
        '60':'60',
        '70':'70',
        '80':'80',
        '90':'90',
        '100':'100',
      },
      spacing: {
        '4.5': '1.125rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '34': '8.5rem'
      },
      boxShadow: {
        strong: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
        flood: '0 10px 15px 5px',
        halo: '0 0 50px -5px',
        belt: '0 0 22px 22px'
      },
      borderRadius: {
        'xs': '2px',
        'sm': '3px'
      },
      animation: {
        'appear': 'appear 700ms ease-in forwards'
      },
      keyframes: {
        appear: {
          '0%, 15%': {opacity:'0'}, '100%': {opacity:'1'}
        }
      }
    },
  },
  plugins: [],
}
