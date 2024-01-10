import { z, defineCollection } from "astro:content";

export const collections = {
	categories: defineCollection({
		type: "content",
		sortBy: "title",
		schema: z.object({
			id: z.number(),
			name: z.string(),
			key: z.string(),
			searchPhrase: z.string(),
			metaTitle: z.string().optional(),
			metaDescription: z.string().optional(),
		}),
	}),
	teaser: defineCollection({
		type: "content",
		sortBy: "title",
		schema: z.object({
			name: z.string(),
			key: z.string(),
			metaTitle: z.string().optional(),
			metaDescription: z.string().optional(),
		}),
	}),
};
