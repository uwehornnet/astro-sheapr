import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const Loader = () => {
	return (
		<div className="container flex flex-col items-center justify-center">
			<div className="h-6 w-6 rounded-full border-4 border-t-darkblue/50 border-r-darkblue/50 border-b-darkblue/50 border-l-darkblue/0 animate-spin"></div>
			<span className="text-darkblue/50 text-sm mt-4">... loading</span>
		</div>
	);
};

const Slider = ({ items }) => {
	return items.length ? (
		<Swiper
			modules={[Navigation, Pagination]}
			spaceBetween={24}
			slidesPerView={4}
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				// when window width is >= 480px
				480: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				// when window width is >= 640px
				640: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 24,
				},
			}}
			navigation={{
				nextEl: ".swiper-controls-next",
				prevEl: ".swiper-controls-prev",
			}}
		>
			{items
				.filter((item, idx) => {
					return idx < 8;
				})
				.map((item, index) => {
					return (
						<SwiperSlide key={index} className="h-auto p-2 bg-white rounded-xl">
							<a
								href={item.booking_url}
								target="_blank"
								rel="noopender"
								className="col-span-1 relative rounded-xl bg-white flex flex-col justify-end aspect-portrait overflow-hidden"
							>
								<div className="absolute top-2 left-2 bg-white text-xs font-semibold rounded-md px-2 py-1 z-10">
									{item.type[0].name}
								</div>
								<img
									src={item.thumbnail}
									alt={item.title}
									className="absolute w-full h-full left-0 top-0 object-cover rounded-xl"
								/>

								<div className="p-2 relative bg-black/30 text-white backdrop-blur-xl rounded-xl">
									<h2 className="font-baloo leading-none mb-6">
										{item.title.substring(0, 40) + "..."}
									</h2>

									<p className="flex items-center justify-start gap-6 text-base">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-4 h-4"
										>
											<path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
										</svg>

										<span>{item.meta.persons} Personen</span>
									</p>
									<p className="flex items-center justify-start gap-6 text-base">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-4 h-4"
										>
											<path
												fillRule="evenodd"
												d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
												clipRule="evenodd"
											/>
										</svg>

										<span>{item.meta.size} m²</span>
									</p>
								</div>
							</a>
						</SwiperSlide>
					);
				})}
			<div className="swiper-controls flex items-center justify-start mt-4 gap-4">
				<div className="swiper-controls-prev cursor-pointer bg-white rounded-full p-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6 pointer-events-none"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
					</svg>
				</div>
				<div className="swiper-controls-next cursor-pointer bg-white rounded-full p-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6 pointer-events-none"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>
				</div>
			</div>
		</Swiper>
	) : (
		<Loader />
	);
};

const Grid = ({ items }) => {
	return items.length ? (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:my-6">
			{items.map((item, index) => {
				return (
					<a
						key={index}
						href={item.booking_url}
						target="_blank"
						rel="noopender"
						className="col-span-1 relative rounded-xl bg-white flex flex-col justify-end aspect-portrait overflow-hidden"
					>
						<div className="absolute top-2 left-2 bg-white text-xs font-semibold rounded-md px-2 py-1 z-10">
							{item.type[0].name}
						</div>
						<img
							src={item.thumbnail}
							alt={item.title}
							className="absolute w-full h-full left-0 top-0 object-cover rounded-xl"
						/>

						<div className="p-2 relative bg-black/30 text-white backdrop-blur-xl rounded-xl">
							<h2 className="font-baloo leading-none mb-6">{item.title.substring(0, 40) + "..."}</h2>

							<p className="flex items-center justify-start gap-6 text-base">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-4 h-4"
								>
									<path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
								</svg>

								<span>{item.meta.persons} Personen</span>
							</p>
							<p className="flex items-center justify-start gap-6 text-base">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-4 h-4"
								>
									<path
										fillRule="evenodd"
										d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
										clipRule="evenodd"
									/>
								</svg>

								<span>{item.meta.size} m²</span>
							</p>
						</div>
					</a>
				);
			})}
		</div>
	) : (
		<Loader />
	);
};

export const Accomodations = ({ view, type, location }) => {
	const [accomodations, setAccomodations] = useState([]);

	async function fetchAccomodations() {
		const response = await fetch("https://meertrip.de/wp-json/app/v1/accomodations");
		const data = await response.json();

		if (!response.ok) return;
		if (type) {
			setAccomodations(
				data.filter((item) => {
					return item.term.slug.toLowerCase() == type;
				})
			);
		} else if (location) {
			setAccomodations(
				data.filter((item) => {
					return item.location[0].name.toLowerCase().includes(location);
				})
			);
		} else {
			setAccomodations(data);
		}
	}

	useEffect(() => {
		fetchAccomodations();
	}, []);

	return view == "slider" ? <Slider items={accomodations} /> : <Grid items={accomodations} />;
};
