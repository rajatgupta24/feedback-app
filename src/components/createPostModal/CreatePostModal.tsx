import AppModal from "../common/appModal/AppModal";

interface CreatePostModalProps {
	open: boolean;
	handleCancel: () => void;
	handleOk: () => void;
}

const CreatePostModal = ({
	open,
	handleCancel,
	handleOk,
}: CreatePostModalProps) => {
	return (
		<AppModal
			isModalOpen={open}
			handleCancel={handleCancel}
			handleOk={handleOk}
			title="Create a New Post"
		>
			<p>Modal Content Here</p>
		</AppModal>
	);
};

export default CreatePostModal;
