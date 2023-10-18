import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Slider = ({ items, columns }) => {
	return (
		<Swiper
			spaceBetween={24}
			slidesPerView={columns}
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
		>
			{items
				.filter((item, idx) => {
					return idx < 2 * columns;
				})
				.map((item, index) => {
					return (
						<SwiperSlide key={index} className="h-auto">
							<a
								href={item.booking_url}
								target="_blank"
								rel="noopender"
								className="col-span-1 rounded-xl bg-white block h-full"
							>
								<img
									src={item.thumbnail}
									alt={item.title}
									className="block w-full rounded-tl-xl rounded-tr-xl aspect-square md:aspect-portrait object-cover"
								/>

								<div className="p-2 ">
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
		</Swiper>
	);
};

const Grid = ({ items, columns, location }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:my-6">
			{items
				.filter((item, idx) => {
					if (location) {
						return true;
					} else {
						return idx < columns;
					}
				})
				.map((item, index) => {
					return (
						<a
							href={item.booking_url}
							target="_blank"
							rel="noopender"
							key={index}
							className="col-span-1 rounded-xl bg-white"
						>
							<img
								src={item.thumbnail}
								alt={item.title}
								className="block w-full rounded-tl-xl rounded-tr-xl aspect-square object-cover"
							/>

							<div className="p-2 ">
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
	);
};

export const Accomodations = ({ view, columns, location }) => {
	const [accomodations, setAccomodations] = useState([]);

	async function fetchAccomodations() {
		const response = await fetch("https://meertrip.de/wp-json/app/v1/accomodations");
		const data = await response.json();

		if (!response.ok) return;
		if (location) {
			setAccomodations(
				data.filter((item) => {
					return item.ort.toLowerCase().includes(location);
				})
			);
		} else {
			setAccomodations(data);
		}
	}

	useEffect(() => {
		fetchAccomodations();
	}, []);

	return view == "slider" ? (
		<Slider items={accomodations} columns={columns} />
	) : (
		<Grid items={accomodations} columns={columns} location={location} />
	);
};
