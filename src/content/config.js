import { z, defineCollection } from "astro:content";

export const collections = {
	standorte: defineCollection({
		type: "content",
		sortBy: "title",
		schema: z.object({
			title: z.string(),
			location: z.string(),
			coords: z.array(z.string()),
			image: z.string().optional(),
			content: z.string().optional(),
		}),
	}),
	types: defineCollection({
		type: "content",
		sortBy: "title",
		schema: z.object({
			title: z.string(),
			content: z.string().optional(),
		}),
	}),
	reviews: defineCollection({
		type: "data",
		sortBy: "title",
		schema: z.object({
			name: z.string(),
			date: z.date(),
			stars: z.number().int().min(1).max(5),
			content: z.string().optional(),
		}),
	}),
};
