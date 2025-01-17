import React, { useState } from "react";
import { Outlet } from "react-router";
import { Icon } from "@iconify/react";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Title from "antd/es/typography/Title";

const { Header, Sider, Content } = Layout;

const Root: React.FC = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const { token } = theme.useToken();

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider trigger={null} collapsible collapsed={isCollapsed}>
				<Title
					style={{ color: "white", textAlign: "center" }}
					level={3}
					title="Bangu University"
				>
					{isCollapsed ? (
						<Icon
							icon="noto-v1:graduation-cap"
							width="40"
							height="40"
						/>
					) : (
						"Bangu University"
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
								<MenuUnfoldOutlined />
							) : (
								<MenuFoldOutlined />
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
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default Root;
