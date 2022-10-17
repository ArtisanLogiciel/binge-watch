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
      '15': ['15px', '1.6'],
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '2.75rem',
      '6xl': '3rem',
    },
    extend: {
      lineHeight: {
        '4.5': '18px'
      },
      letterSpacing: {
        'xs': '-0.1px'
      },
      colors: {
        'dark-navy': '#040714',  // this is between black and navy
        'dark-violet': '#0e0b14',  // this is between black and violet
        grey: {
          dark: '#31343e',
          medium: '#1a1d29',
          DEFAULT: '#a5a6a7',
          light: '#e2e2e3',
          ultralight: '#f9f9f9'
        },
        binge: {
          DEFAULT: '#ea9814',
          medium: '#945da8',
          dark: '#813c9a',
        }
      },
      screens: {
        'mm' : '425',
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
        '2.75':'0.6875rem',
        '4.5': '1.125rem',
        '7.5': '1.875rem',
        '13': '52px',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '34': '8.5rem',
        '37.5': '600px'
      },
      boxShadow: {
        strong: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
        flood: '0 10px 15px 5px',
        halo: '0 0 50px -5px',
        belt: '0 0 22px 22px',
        card: '0px 20px 14px -10px rgba(83, 83, 98, 0.5)'
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
      },
      backgroundImage: {
        'landing': `url("/images/bg-landing-base.jpeg")`,
        'landing-lg': `url("/images/bg-landing-lg.jpeg")`,
        'preview': `url("/images/landing-preview.png")`,
        'logo': `url("public/images/BingeLogo.png")`
      },
    },
  },
  plugins: [],
}
