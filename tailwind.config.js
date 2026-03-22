/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:    '#1B2E4B',
        blue:    '#2E5FA3',
        teal:    '#6BB8B8',
        bg:      '#F4F7FB',
        card:    '#FFFFFF',
        border:  '#E1E7EF',
        light:   '#5B6B7F',
        success: '#2FBF71',
        warning: '#F2A93B',
        danger:  '#E5533D',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 2px 6px rgba(27,46,75,0.06)',
        panel: '0 -4px 12px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
