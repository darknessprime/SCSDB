/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1F1E24",
                secondary: "#6556CD",
                "secondary-dark": "#5446B8",
                dark: "#16151A",
                light: "#F8F9FA",
                "zinc-custom": "#27272a",
                "accent-purple": "#8C7CF0",
                "accent-yellow": "#FFC107"
            },
            boxShadow: {
                'card': '0 4px 15px rgba(0, 0, 0, 0.2)',
                'hover': '0 10px 25px rgba(0, 0, 0, 0.3)',
                'button': '0 4px 12px rgba(101, 86, 205, 0.4)'
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            }
        },
    },
    plugins: [],
};
