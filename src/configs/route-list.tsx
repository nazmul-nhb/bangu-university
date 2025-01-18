import { Icon } from "@iconify/react";
import { NavLink } from "react-router";
import type { ItemType, MenuItemType } from "antd/es/menu/interface";

export const sidebarItems: ItemType<MenuItemType>[] = [
	{
		key: "home",
		icon: <Icon icon="fluent-color:home-48" width="24" height="24" />,
		label: <NavLink to={"/"}>Home</NavLink>,
		children: [
			{
				key: "home-about",
				icon: (
					<Icon
						icon="fluent-color:question-circle-16"
						width="24"
						height="24"
					/>
				),
				label: <NavLink to={"/about"}>About</NavLink>,
			},
			{
				key: "home-contact",
				icon: (
					<Icon
						icon="fluent-mdl2:connect-contacts"
						width="24"
						height="24"
					/>
				),
				label: <NavLink to={"/contact"}>Contact</NavLink>,
			},
		],
	},
	{
		key: "about",
		icon: (
			<Icon
				icon="fluent-color:question-circle-16"
				width="24"
				height="24"
			/>
		),
		label: <NavLink to={"/about"}>About</NavLink>,
	},
	{
		key: "contact",
		icon: (
			<Icon icon="fluent-mdl2:connect-contacts" width="24" height="24" />
		),
		label: <NavLink to={"/contact"}>Contact</NavLink>,
	},
];
