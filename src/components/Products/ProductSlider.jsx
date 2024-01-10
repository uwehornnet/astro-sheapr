import { useEffect, useState } from "react";

import Product from "./Product";

const ProductSlider = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		try {
			if (loading) return;
			setLoading(true);

			const req = await fetch("/api/staticdata");
			const res = await req.json();

			setProducts(
				res
					.map((pr) => {
						return {
							title: pr.name,
							image: pr.image,
							link: pr.link,
							price: parseFloat(pr.price).toFixed(2),
							store: pr.store !== "" ? pr.store : null,
							type: pr.type !== "" ? pr.type : null,
							category: pr.category,
						};
					})
					.sort(() => Math.random() - 0.5)
			);
			setLoading(false);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return loading ? (
		<div>... loading</div>
	) : (
		<div className="flex justify-start gap-4 md:gap-4 mt-4 overflow-scroll no-scrollbar">
			{products.map((product, index) => (
				<div key={index} className=" max-w-[260px] min-w-[260px]">
					<Product product={product} />
				</div>
			))}
		</div>
	);
};

export default ProductSlider;
