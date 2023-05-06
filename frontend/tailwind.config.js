/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        colors: {
            'light-background': '#F4F4F4',
            'light-secondary': '#192231',
            'light-primary': '#C0B283',
            'dark-background': '#181818',
            'dark-secondary': '#51564E',
            'dark-primary': '#BDFF00',
            'red': '#FF0000',
            'pastel': '#FF6961',
            transparent: 'transparent',
        },
        extend: {},
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
