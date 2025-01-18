import type { ReactNode } from "react";

export interface IRoute {
	label: ReactNode;
	path: string;
	icon: string;
	element?: ReactNode;
	children?: IRoute[];
}
