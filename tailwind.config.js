/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
                bebas: ['Bebas Neue', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                raleway: ['Raleway', 'sans-serif'],
            },
            backgroundImage: {
                'header-linear-gradiant':
                    'linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)',
                'title-text-gradiant':
                    'linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)',
            },

            opacity: {
                12: '0.12',
            },
        },
        container: {
            center: true,
            screens: {
                '2xl': '1320px',
            },
        },
    },
    plugins: [],
};
