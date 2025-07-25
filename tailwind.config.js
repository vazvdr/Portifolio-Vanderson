/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			animation: {
				'fade-in-left': 'fadeInLeft 1.5s ease-out forwards',
				'fade-in-right': 'fadeInRight 1.5s ease-out forwards',
				shake: 'shake 0.5s infinite'
			},
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				audiowide: ['Audiowide', 'cursive'],
				bebas: ['Bebas Neue', 'sans-serif'],
				rajdhani: ['Rajdhani', 'sans-serif'],
				fira: ['Fira Code', 'monospace'],
			},
			keyframes: {
				fadeInLeft: {
					'0%': {
						opacity: 0,
						transform: 'translateX(100%)'
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(0)'
					}
				},
				fadeInRight: {
					'0%': {
						opacity: 0,
						transform: 'translateX(-100%)'
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(0)'
					}
				},
				shake: {
					'0%, 100%': {
						transform: 'translateX(0)'
					},
					'25%': {
						transform: 'translateX(-2px)'
					},
					'50%': {
						transform: 'translateX(2px)'
					},
					'75%': {
						transform: 'translateX(-1px)'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				screens: {
					md840px: '840px',
					screen320px: '320px',
					screen414px: '414px',
					screen360px: '360px'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
