/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		container: false,
		extend: {
			fontFamily: {
				jost: ['"Jost"'],
			},
			fontSize: {
				"3xl": "32px",
				"4xl": "48px",
				"5xl": "56px",
				"6xl": "64px",
				"7xl": "72px",
				"8xl": "80px",
			},
			aspectRatio: {
				portrait: "9 / 13",
				video: "16 / 9",
				header: "16 / 8",
				banner: "16 / 4",
				bannerbox: "1 / 2",
			},
			animation: {
				"spin-slow": "spin 20s linear infinite",
			},
		},
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				".container": {
					maxWidth: "1400px",
					margin: "0px auto",
					padding: "0px 0.8rem",
					"@screen sm": {
						maxWidth: "40rem",
					},
					"@screen md": {
						maxWidth: "56rem",
					},
					"@screen lg": {
						maxWidth: "68rem",
					},
					"@screen xl": {
						maxWidth: "1400px",
					},
					"@screen 2xl": {
						maxWidth: "1400px",
					},
				},
			});
		},
	],
};
