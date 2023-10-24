/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'body-dark': '#004554',
        'action': '#FFD335',
        'border-primary': '#AAD8E2',
        'icon-primary': '#0089A7'
      }
    },
	},
	plugins: [],
}
