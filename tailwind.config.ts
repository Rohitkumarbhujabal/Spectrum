import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', 'Roboto', 'Arial'],
        'serif': ['ui-serif', 'Georgia', 'serif', 'Times'],
        'mono': ['Menlo', 'SFMono-Regular', 'Monaco', 'Consolas'],
        'mono1': ['Courier New', 'SFMono-Regular', 'Menlo', 'Consolas']
      }
    },
  },
  plugins: [],
}
export default config
