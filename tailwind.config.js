module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        fontFamily: {
            title: ['Montserrat', 'sans-serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#5d8896',
                secondary: '#101e6b',
                primaryLight: '#55b8c1',
                whitePearl: '#e8e8e7',
                decorMain: '#c6d322',
                decorAlt: '#C52877',
                inverse: '#393e41',
                inverseLight: '#989798',
                alternative: '#6395A6',
            },
            spacing: {
                '96': '24rem',
                '128': '32rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/custom-forms'),
    ],
}
