/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'body-dark': '#004554',
        'action': '#FFD335',
        'border-primary': '#AAD8E2',
        'icon-primary': '#0089A7',
        'background-action-1': '#F8F0D4',
        'background-warning': '#FCE9CC',
        'background-light': '#faf7ee',
        'border-light-blue': '#8DB2BA',
        'blue-1': '#55B0C4',
        'blue-2': '#00728B',
        'blue-3': '#002E38',
        'blue-4': '#C9E5EB',
        'turqoise-1': '#CCE7ED',
      }
    },
	},
	plugins: [],
}
