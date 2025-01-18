import { Route, Routes } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const BanguRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Root />}>
				<Route index={true} element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
	);
};
