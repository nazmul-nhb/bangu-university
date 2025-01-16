import React from "react";
import { Outlet } from "react-router";

const Root = () => {
	return (
		<React.Fragment>
			<Outlet />
		</React.Fragment>
	);
};

export default Root;
