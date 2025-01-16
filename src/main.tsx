import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { BanguRoutes } from "./routes";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<BanguRoutes />
		</BrowserRouter>
	</StrictMode>
);
