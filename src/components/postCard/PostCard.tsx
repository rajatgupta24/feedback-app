import { Avatar, Card } from "antd";
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import styles from "./PostCard.module.scss";

const { Meta } = Card;

interface PostCardProps {
	title: string;
	description: string;
	author: string;
	date: string;
}

const PostCard = ({ title, description, author, date }: PostCardProps) => {
	return (
		<>
			<Card
				actions={[
					<SettingOutlined key="setting" />,
					<EditOutlined key="edit" />,
					<EllipsisOutlined key="ellipsis" />,
				]}
			>
				<Meta
					avatar={
						<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
					}
					title={title}
					description={description}
				/>
			</Card>
		</>
	);
};

export default PostCard;
