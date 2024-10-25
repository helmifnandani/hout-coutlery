/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontSize: {
                h1: [
                    '36px',
                    {
                        lineHeight: '44px',
                        fontWeight: '700',
                    },
                ],

                h2: [
                    '24px',
                    {
                        lineHeight: '34px',
                        fontWeight: '700',
                    },
                ],
                h3: [
                    '20px',
                    {
                        lineHeight: '28px',
                        fontWeight: '700',
                    },
                ],
                h4: [
                    '16px',
                    {
                        lineHeight: '24px',
                        fontWeight: '700',
                    },
                ],
                'sub-h-xl': [
                    '28px',
                    {
                        lineHeight: '34px',
                        fontWeight: '600',
                    },
                ],
                'sub-h-l': [
                    '20px',
                    {
                        lineHeight: '28px',
                        fontWeight: '600',
                    },
                ],
                'sub-h-m': [
                    '16px',
                    {
                        lineHeight: '24px',
                        fontWeight: '600',
                    },
                ],
                'sub-h-s': [
                    '14px',
                    {
                        lineHeight: '20px',
                        fontWeight: '600',
                    },
                ],
                'body-xl': [
                    '20px',
                    {
                        lineHeight: '32px',
                        fontWeight: '400',
                    },
                ],
                'body-l': [
                    '18px',
                    {
                        lineHeight: '28px',
                        fontWeight: '400',
                    },
                ],
                'body-m': [
                    '16px',
                    {
                        lineHeight: '24px',
                        fontWeight: '400',
                    },
                ],
                'body-s': [
                    '14px',
                    {
                        lineHeight: '20px',
                        fontWeight: '400',
                    },
                ],
                'semi-m': [
                    '12px',
                    {
                        lineHeight: '16px',
                        fontWeight: '600',
                    },
                ],
                'semi-s': [
                    '10px',
                    {
                        lineHeight: '14px',
                        fontWeight: '600',
                    },
                ],
                'medium-m': [
                    '12px',
                    {
                        lineHeight: '16px',
                        fontWeight: '500',
                    },
                ],
                'medium-s': [
                    '10px',
                    {
                        lineHeight: '14px',
                        fontWeight: '500',
                    },
                ],
                'regular-m': [
                    '12px',
                    {
                        lineHeight: '16px',
                        fontWeight: '400',
                    },
                ],
                'regular-s': [
                    '10px',
                    {
                        lineHeight: '14px',
                        fontWeight: '400',
                    },
                ],
                'secondary-l': [
                    '48px',
                    {
                        lineHeight: '56px',
                        fontWeight: '400',
                    },
                ],
                'secondary-m': [
                    '40px',
                    {
                        lineHeight: '52px',
                        fontWeight: '400',
                    },
                ],
                'secondary-s': [
                    '32px',
                    {
                        lineHeight: '52px',
                        fontWeight: '400',
                    },
                ],
                'secondary-xs': [
                    '28px',
                    {
                        lineHeight: '40px',
                        fontWeight: '400',
                    },
                ],
            },
            colors: {
                primary: {
                    100: '#FCF4ED',
                    200: '#F7DFCA',
                    300: '#EFBF95',
                    400: '#E9A86E',
                    500: '#CC915C',
                    600: '#99693F',
                    700: '#664120',
                    800: '#33200E',
                },
                accent: {
                    white: '#FAFAFA',
                    black: '#201916',
                    gray: '#BBBBBB',
                    lightGray: '#F1F1F1',
                    background: '#FCF4ED',
                },
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            aspectRatio: {
                '1x1': '1 / 1',
                '1x2': '1 / 2',
                '1x3': '1 / 3',
                '2x1': '2 / 1',
                '2x3': '2 / 3',
                '3x1': '3 / 1',
                '3x2': '3 / 2',
                '3x4': '3 / 4',
                '4x1': '4 / 1',
                '4x3': '4 / 3',
                '4x5': '4 / 5',
                '5x1': '5 / 1',
                '5x2': '5 / 2',
                '5x3': '5 / 3',
                '9x10': '9 / 10',
                '16x9': '16 / 9',
                '20x9': '20 / 9',
                'golden-v': '1.618',
                'golden-h': '0.6180469715698392',
                card: '0.666666',
                'card-sm': '37 / 45',
            },
        },
    },
    plugins: [],
}
