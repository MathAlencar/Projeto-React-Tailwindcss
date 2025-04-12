/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          graphik: ['Graphik', 'sans-serif'],
          graphikBold: ['GraphikBold', 'sans-serif'],
          latoRegular: ['latoRegular', 'sans-serif'],
          latoThin: ['latoThin', 'sans-serif'],
          latoBold: ['latoBold', 'sans-serif'],
        },
        colors: {
          primary: '#003399',
          'secondary-blue': '#66cccc',
          'primary-red': '#ff6666',
          'primary-green': ' #33cc99',
          'primary-gray': '#EAEAEA',
        },
        screens: {
          xs: '370px',
          xes: '580px',
        },
        borderRadius: {
          xss: '35px',
        },
        height: {
          10: '10px',
          15: '15px',
          50: '50px',
        },
      },
    },
    plugins: [],
  };
  