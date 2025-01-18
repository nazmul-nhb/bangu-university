import React, { useState } from "react";
import { Outlet } from "react-router";
import { Icon } from "@iconify/react";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, theme } from "antd";
import Title from "antd/es/typography/Title";
import { site_title } from "../configs";

const { Header, Sider, Content, Footer } = Layout;

const Root: React.FC = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	// const { message, notification, modal } = App.useApp();
	const { token } = theme.useToken();

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider trigger={null} collapsible={true} collapsed={isCollapsed}>
				<Title
					style={{
						color: "white",
						textAlign: "center",
						paddingTop: 8,
					}}
					level={3}
					title={site_title}
				>
					{isCollapsed ? (
						<Icon
							icon="noto-v1:graduation-cap"
							width="40"
							height="40"
						/>
					) : (
						site_title
					)}
				</Title>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["1"]}
					items={[
						{
							key: "1",
							icon: <UserOutlined />,
							label: "User",
						},
						{
							key: "2",
							icon: <VideoCameraOutlined />,
							label: "Start Video Call",
						},
						{
							key: "3",
							icon: <UploadOutlined />,
							label: "Upload Contents",
						},
					]}
				/>
			</Sider>
			<Layout>
				<Header
					style={{ padding: 0, background: token.colorBgContainer }}
				>
					<Button
						type="text"
						icon={
							isCollapsed ? (
								<Icon
									icon="line-md:menu-unfold-right"
									width="24"
									height="24"
								/>
							) : (
								<Icon
									icon="line-md:menu-unfold-left"
									width="24"
									height="24"
								/>
							)
						}
						onClick={() => setIsCollapsed(!isCollapsed)}
						style={{
							fontSize: "16px",
							width: 64,
							height: 64,
						}}
					/>
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						background: token.colorBgContainer,
						borderRadius: token.borderRadiusLG,
					}}
				>
					<Flex gap={6} justify="space-between">
						<h2>Abul</h2>
						<h2>Babul</h2>
					</Flex>
					<Outlet />
				</Content>
				<Footer style={{ textAlign: "center" }}>
					&copy; {new Date().getFullYear()} {site_title}
				</Footer>
			</Layout>
		</Layout>
	);
};

export default Root;
