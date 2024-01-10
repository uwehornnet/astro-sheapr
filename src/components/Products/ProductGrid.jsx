import { useEffect, useState } from "react";
import Product from "./Product";
import ActivityIndicator from "../ActivityIndicator";

const ProductGrid = ({ id, searchPhrase }) => {
	const [loading, setLoading] = useState(false);
	const [offset, setOffset] = useState(0);
	const [products, setProducts] = useState({
		offset,
		items: [],
		total: null,
	});

	const fetchProducts = async () => {
		try {
			setLoading(true);
			const req = await fetch("/api/category", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: id,
					query: searchPhrase,
					offset: offset,
				}),
			});
			const res = await req.json();

			setProducts({
				offset,
				total: res.total,
				items: [...products.items, ...res.items],
			});
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [offset]);

	return (
		<>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-4 mt-4">
				{products.items.map((product, index) => (
					<Product key={index} product={product} />
				))}
			</div>
			{loading ? (
				<ActivityIndicator />
			) : (
				<div className="flex items-center justify-center my-8">
					<button
						className="inline-block py-3 px-16 text-center hover:bg-black uppercase text-sm rounded-full border-2 border-black text-black hover:text-white"
						onClick={() => {
							setOffset(25 + products.offset);
						}}
					>
						<span className="block font-medium tracking-wider">load more</span>
						<small>{`(${products?.total - products?.items.length} available)`}</small>
					</button>
				</div>
			)}
		</>
	);
};

export default ProductGrid;
