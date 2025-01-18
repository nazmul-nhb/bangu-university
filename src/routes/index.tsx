import { Route, Routes } from "react-router";
import Root from "../layouts/Root";

export const BanguRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Root />}>
				{/* <Route index={true} element={<App />} /> */}
				<Route path="hola" element="Hola!" />
			</Route>
		</Routes>
	);
};
