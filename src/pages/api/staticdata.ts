import type { APIRoute } from "astro";
import staticData from "../../utils/static.json";

export const GET: APIRoute = async function get({ params, request }) {
	try {
		// @ts-ignore
		return new Response(JSON.stringify(staticData), { status: 200 });
	} catch (e) {
		// @ts-ignore
		return new Response(
			JSON.stringify({
				message: e.message,
			}),
			{ status: 500 }
		);
	}
};
