import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { BanguRoutes } from "./routes";
import { App, ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<ConfigProvider
				modal={{
					styles: {
						mask: { background: "#f6ffed" },
					},
				}}
				theme={{
					token: {
						colorPrimary: "#006ca2",
						colorBgLayout: "",
						borderRadius: 2,
						colorBgContainer: "#f6ffed",
						colorInfoBg: "#e6f7ff",
						colorWarningBg: "#fffbe6",
					},
				}}
			>
				<App
					notification={{ placement: "bottomRight" }}
					message={{ duration: 2 }}
				>
					<BanguRoutes />
				</App>
			</ConfigProvider>
		</BrowserRouter>
	</StrictMode>
);
