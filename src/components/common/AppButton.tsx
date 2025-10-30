import { Button } from "antd";
import React from "react";

interface AppButtonProps {
	type: "primary" | "default" | "dashed" | "text" | "link";
	onClick?: () => void;
	children: React.ReactNode;
}

const AppButton = ({ type, onClick, children }: AppButtonProps) => {
	return (
		<>
			<Button type={type} onClick={onClick}>
				{children}
			</Button>
		</>
	);
};

export default AppButton;
