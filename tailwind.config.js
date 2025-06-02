/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#d6e8ff',
          200: '#b5d5ff',
          300: '#8cbaff',
          400: '#5e94fc',
          500: '#3b75f5',
          600: '#2860ea',
          700: '#1e4dd1',
          800: '#1e42aa',
          900: '#1e3c85',
        },
        secondary: {
          50: '#f0f8fa',
          100: '#d8ecf3',
          200: '#b8dce8',
          300: '#8cc5d8',
          400: '#56a7c6',
          500: '#3a8daf',
          600: '#2e7494',
          700: '#2a5f7a',
          800: '#264e64',
          900: '#244255',
        },
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}