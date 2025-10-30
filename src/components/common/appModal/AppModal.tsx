import type React from "react";
import { Modal } from "antd";
import styles from "./AppModal.module.scss";

interface AppModalProps {
	isModalOpen: boolean;
	handleOk: () => void;
	handleCancel: () => void;
	title: string;
	children: React.ReactNode;
}

const AppModal = ({
	isModalOpen,
	handleOk,
	handleCancel,
	title,
	children,
}: AppModalProps) => {
	return (
		<>
			<Modal
				title={title}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				{children}
			</Modal>
		</>
	);
};

export default AppModal;
