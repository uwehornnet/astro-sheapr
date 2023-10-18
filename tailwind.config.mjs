/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		container: false,
		extend: {
			animation: {
				"spin-slow": "spin 20s linear infinite",
			},
			colors: {
				lightest: "#EDECE5",
				light: "#E2E0D1",
				petrol: "#D8E0D4",
				petroldark: "#88A398",
				dark: "#1B1C1F",
			},
			fontFamily: {
				jost: ['"Jost"'],
				baloo: ['"Baloo"'],
			},
			aspectRatio: {
				portrait: "9 / 11",
				banner: "16 / 4",
				video: "16 / 9",
				square: "1 / 1",
			},
			spacing: {
				"some key": {
					1.5: "",
				},
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