import type { APIRoute } from "astro";
import eBayApi from "ebay-api";
import { QUERY_VARS } from "../../utils/QueryVars";

const eBay = new eBayApi({
	appId: "UweHorn-TikiShop-PRD-01c6fefd9-8c8c4fb7",
	certId: "PRD-1c6fefd90bec-3b08-44b7-a3dd-f70e",
	sandbox: false,
	siteId: eBayApi.SiteId.EBAY_DE, // required for traditional APIs, see https://developer.ebay.com/DevZone/merchandising/docs/Concepts/SiteIDToGlobalID.html
	marketplaceId: eBayApi.MarketplaceId.EBAY_DE, // defautl. required for RESTful APIs
	acceptLanguage: eBayApi.Locale.de_DE, // defautl
	contentLanguage: eBayApi.ContentLanguage.de_DE,
});

export const POST: APIRoute = async function get({ params, request }) {
	try {
		const { id, query, offset } = await request.json();

		const req = await eBay.buy.browse.search({
			category_ids: `${id}`,
			q: `${query}`,
			limit: "25",
			filter: `conditions:{NEW}`,
			offset: offset,
		});

		const mappedResponse = req.itemSummaries.map((product) => {
			let link = product.itemWebUrl;

			return {
				title: product.title,
				image: product.image.imageUrl,
				link: link + QUERY_VARS,
				price: product.price.value,
				store: "ebay",
				shipping: product.shippingOptions[0].shippingCost.value,
			};
		});

		// @ts-ignore
		return new Response(
			JSON.stringify({
				total: req.total,
				items: mappedResponse,
				offset: req.offset,
			}),
			{ status: 200 }
		);
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

// export default async function handler(req, res) {
// 	try {
// 		if (!req.body.id) {
// 			res.status(500).json({ status: false });
// 		}
// 		const response = await eBay.buy.browse.search({
// 			category_ids: `${req.body.id}`,
// 			q: `${req.body.query}`,
// 			limit: 25,
// 			filter: `conditions:{NEW}`,
// 			offset: req.body.offset,
// 		});

// 		res.status(200).json({ status: "ok", res: response });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).json({ status: false, res: error });
// 	}
// }
