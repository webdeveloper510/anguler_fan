/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      translate: {
        '-1/2': '-50%',
        '10px': '10px',
      },
      fontFamily: {
        'Lufga': ['Lufga', 'system-ui'],
        'hallelujah': ["Gloria Hallelujah", 'cursive']
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/images/banner.png')",
        'about': "url('./assets/images/about.png')",
        'campare': "url('./assets/images/banner12.png')",
        'campareSection': "url('./assets/images/compare.png')",
        'campareSection1': "url('./assets/images/compareImage.png')",
        'campareSection2': "url('./assets/images/compareImage.png')",
        'campareSection3': "url('./assets/images/compareImage1 (1).png')",
        'campareSection4': "url('./assets/images/compareImage1 (2).png')",
        'campareSection5': "url('./assets/images/compareImage1 (3).png')",
        'campareSection6': "url('./assets/images/compareImage1 (4).png')",
        'campareSection7': "url('./assets/images/compareImage1 (5).png')",
        'campareSection8': "url('./assets/images/compareImage1 (6).png')",
        'campareSection9': "url('./assets/images/compareImage1 (7).png')",
        'campareSection10': "url('./assets/images/compareImage1 (8).png')",
      },
      screens: {
        's': '320px',
        // => @media (min-width: 320px) { ... }

        'sm': '540px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}