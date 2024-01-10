import { useEffect, useState } from "react";

export default function ActivityIndicator() {
	const [message, setMessage] = useState("... collecting Data");

	useEffect(() => {
		setTimeout(() => {
			setMessage("... looking for best offer");
		}, 3000);
	}, []);

	return (
		<div className="flex items-center justify-center flex-col p-8">
			<div
				className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-black"
				role="status"
				style={{ borderTopColor: "rgba(0, 0, 0, 0.1)" }}
			>
				<span className="visually-hidden"></span>
			</div>

			<span className="text-sm text-zinc-300 text-center mt-4">{message}</span>
		</div>
	);
}
