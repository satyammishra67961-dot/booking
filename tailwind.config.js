const opacityScale = Object.fromEntries(
  Array.from({ length: 101 }, (_, value) => [value, String(value / 100)]),
)

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#171329',
        'ink-soft': '#2a2540',
        muted: '#706c83',
        lavender: '#f4f0ff',
        'lavender-deep': '#e8e0ff',
        lilac: '#c9b8ff',
        purple: '#8b5cf6',
        'purple-deep': '#6d28d9',
        'purple-light': '#b79cff',
        sky: '#67b7ff',
        pink: '#e66ad4',
        mist: '#faf9ff',
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Manrope Variable"', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px -32px rgba(80, 56, 160, 0.3)',
        glass: '0 20px 60px -26px rgba(91, 65, 170, 0.22)',
        glow: '0 0 70px -12px rgba(139, 92, 246, 0.45)',
        'glow-blue': '0 0 70px -18px rgba(103, 183, 255, 0.55)',
        card: '0 18px 50px -30px rgba(53, 36, 110, 0.28)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 72% 42%, rgba(201,184,255,0.48), transparent 34%), radial-gradient(circle at 28% 20%, rgba(103,183,255,0.16), transparent 28%), radial-gradient(circle at 50% 100%, rgba(244,240,255,0.85), transparent 42%)',
        'purple-gradient': 'linear-gradient(112deg, #7c3aed 0%, #9b6bff 45%, #67b7ff 100%)',
        'instagram-gradient': 'linear-gradient(135deg, #833ab4 0%, #c13584 40%, #e1306c 65%, #fcaf45 100%)',
      },
      opacity: opacityScale,
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'pulse-soft': 'pulseSoft 4.5s ease-in-out infinite',
        'drift': 'drift 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.12)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(18px,-20px,0) rotate(6deg)' },
        },
      },
    },
  },
  plugins: [],
}
