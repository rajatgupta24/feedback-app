import { useState } from "react";
import AppButton from "../common/AppButton";
import styles from "./Navbar.module.scss";
import CreatePostModal from "../createPostModal/CreatePostModal";
import { Link } from "react-router";

const Navbar = () => {
	const [isCreatePostVisible, setIsCreatePostVisible] =
		useState<boolean>(false);

	const handleCreatePostOpenModal = () => {
		setIsCreatePostVisible(true);
	};

	return (
		<>
			<nav className={styles.navbar}>
				<h1>Feedback App</h1>

				<ul className={styles.links}>
					<li>
						<Link className={styles.link} to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className={styles.link} to="my-feedback">
							My Feedback
						</Link>
					</li>
					<li>
						<Link className={styles.link} to="received">
							Received Feedback
						</Link>
					</li>
					<li>
						<AppButton type="primary" onClick={handleCreatePostOpenModal}>
							Create a Post
						</AppButton>
					</li>
				</ul>
			</nav>

			<CreatePostModal
				open={isCreatePostVisible}
				handleCancel={() => setIsCreatePostVisible(false)}
				handleOk={() => setIsCreatePostVisible(false)}
			/>
		</>
	);
};

export default Navbar;
