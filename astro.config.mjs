import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		react(),
		mdx(),
	],
	output: "server",
	adapter: vercel(),
});