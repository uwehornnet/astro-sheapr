const Product = ({ product }) => {
	return (
		<div className="relative h-full flex flex-col group border-slate-200 bg-white border rounded-sm hover:shadow-lg duration-300 transition-shadow ease-out">
			<div className="relative flex items-center justify-center bg-white p-8">
				<a href={product.link} target="_blank">
					<img
						src={product.image}
						alt={product.title}
						className="w-full aspect-square object-contain rounded-sm "
					/>
				</a>
			</div>

			<div className="flex-1 text-left p-2 bg-white flex flex-col justify-between">
				<div>
					<h3 className="text-small m-0">{product.title.substring(0, 40)}</h3>
					<p className="mt-1 mb-4 font-medium">{product.price} EUR</p>
				</div>

				<div>
					<a
						href={product.link}
						target="_blank"
						className="block w-full rounded-full border-2 border-black px-4 py-2 my-2 text-center font-medium group-hover:text-white group-hover:bg-rose-500 group-hover:border-rose-500 text-sm leading-snug"
					>
						<img
							src={`/images/${product.store}.png`}
							alt={product.store}
							height={30}
							className="mx-auto h-3"
						/>
						<span>{`auf ${product.store} ansehen`}</span>
					</a>

					<small className=" text-green-400 flex items-center justify-start gap-1">
						<span className="w-2 h-2 rounded-full block bg-green-300"></span>
						in Stock
					</small>
					{product.shipping ? (
						<small className="flex items-center gap-1 text-slate-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
								/>
							</svg>
							<span>Versand: {parseFloat(product.shipping).toFixed(2)} EUR </span>
						</small>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Product;
