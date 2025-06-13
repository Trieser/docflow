const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');
const flowbite = require('flowbite');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}', // tambahkan ini
    ],

    theme: {
        extend: {
            animation: {
                shine: "shine 10s infinite linear",
                faded: "faded .5s ease-in-out",
                shortspin: "spin .7s linear",
                grow: "grow .4s ease-in-out",
                typing: "typing 3s infinite",
                flip: "flip .5s ease-in-out"
            },
            keyframes: {
                shine: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                faded: {
                    "0%": { opacity: 0, width: "0" },
                    "100%": { opacity: 1, width: "100%", height: "100%" },
                },
                shortspin: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(180deg)" },
                },
                grow: {
                    "0%": { height: "0", transformOrigin: "top right", transform: "scale(0)" },
                    "100%": { transform: "scale(1)" },
                },
                typing: {
                    "0%": { width: "1ch" },
                    "100%": { width: "16ch" },
                },
                flip: {
                    "0%": { transform: "rotateY(0deg)", transformOrigin: "center center" },
                    "20%": { transform: "rotateY(30deg)" },
                    "40%": { transform: "rotateY(60deg)" },
                    "60%": { transform: "rotateY(90deg)" },
                    "80%": { transform: "rotateY(120deg)" },
                    "100%": { transform: "rotateY(180deg)" },
                }
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                okbold: ['okbold', 'sans-serif'],
                okmed: ['okmed', 'sans-serif'],
                okreg: ['okreg', 'sans-serif'],
            },
            colors: {
                base: {
                    orange: '#DA593C',
                    brown: '#54484A',
                    grey: '#8D8E93',
                    bg: '#D9D9D9',
                    default: '#D9D9D9',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                },
            },
        },
    },

    plugins: [forms, flowbite],
};