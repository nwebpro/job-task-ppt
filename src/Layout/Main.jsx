import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Components/Header";

const Main = () => {
	return (
		<>
			<Header />
			<ScrollRestoration />
			<main className="font-inter">
				<Outlet />
			</main>
		</>
	);
};

export default Main;